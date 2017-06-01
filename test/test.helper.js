process.stdout.write('[helper] setting up Chai & Sinon... ');
const fs = require('fs');
const path = require('path');
const chai = require('chai');
chai.use(require('sinon-chai'));
global.expect = chai.expect;
global.sinon = require('sinon');
process.stdout.write('DONE.\n\n');

process.stdout.write('[helper] retrieving consumer key from ./.env file...');
try {
  const consumerKeyIdentifier = 'DATAGOVSG_CONSUMER_KEY=';
  if(process.env.DATAGOVSG_CONSUMER_KEY) {
    global.DATAGOVSG_CONSUMER_KEY = process.env.DATAGOVSG_CONSUMER_KEY;
  } else {
    const env = fs.readFileSync(path.join(process.cwd(), './.env')).toString();
    const indexOfConsumerKeyIdentifier = env.indexOf(consumerKeyIdentifier);
    if(indexOfConsumerKeyIdentifier === -1) {
      throw new Error(`"${consumerKeyIdentifier}" key was not found in ./.env.`);
    }
    const startOfConsumerKey = env.substr(
      indexOfConsumerKeyIdentifier + consumerKeyIdentifier.length
    );
    const indexOfNextNewline = startOfConsumerKey.indexOf('\n');
    global.DATAGOVSG_CONSUMER_KEY = (indexOfNextNewline !== -1) ?
      startOfConsumerKey.substr(0, indexOfNextNewline) :
      startOfConsumerKey;
  }
  process.stdout.write('DONE.\n\n');
} catch(ex) {
  process.stdout.write('\n[helper] ERROR: ./.env not found OR did not contain "DATAGOVSG_CONSUMER_KEY" key.\n');
  console.error(ex);
  process.exit(1);
}