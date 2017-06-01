# `data-dot-gov`
This package is an API wrapper for data from https://data.gov.sg using JavaScript.

## Installation
Install it via `npm`:

```bash
# npm install data-dot-gov --save-dev
```

## Usage

### Obtain an API Consumer Key
In your main `index.js`/`server.js` file, import the package and set the consumer key. You can obtain
a consumer key by creating an account at https://developers.data.gov.sg.

After setting up, go to your APIs and create a new app. A Consumer Key should have been made available to you.

### Include `data-dot-gov`
Use the following code to import the package and set the Consumer Key:

```javascript
// include package
const dataDotGov = require('data-got-gov');

// ... other code ...

// set consumer key
dataDotGov.setConsumerKey('abcdefghijklmnopqrstuv');

// use it
dataDotGov.RealTime.Transport.getTaxiAvailability()
  .then((response) => {
    // handle success
  })
  .catch((err) => {
    // handle error
  });
```

All functions return a Q promise so you can use `.then()` for success cases and `.catch()` for errors.

### Available APIs
✅ indicates it's **ready**.
❌ indicates it's **not ready**.

#### Real-Time APIs
Source: https://developers.data.gov.sg/

##### ✅ taxi-availability

Available at: `dataDotGov.RealTime.Transport.getTaxiAvailability()`

##### ❌ traffic-images

Not available yet.

##### ❌ 2-hour-weather-forecast

Not available yet.

##### ❌ 24-hour-weather-forecast

Not available yet.

##### ❌ 4-day-weather-forecast

Not available yet.

##### ❌ air-temperature

Not available yet.

##### ❌ pm25

Not available yet.

##### ❌ psi

Not available yet.

##### ❌ rainfall

Not available yet.

##### ❌ relative-humidity

Not available yet.

##### ❌ uv-index

Not available yet.

##### ❌ wind-direction

Not available yet.

##### ❌ wind-speed

Not available yet.

#### Data-Store APIs
Source: https://data.gov.sg/developer

##### Meta Data

###### ✅ package_metadata

Available at: `dataDotGov.DataStore.getPackageInfo(:package_name)`

`:package_name` - name of package according to package on https://data.gpv.sg.

###### ✅ resource_metadata

Available at: `dataDotGov.DataStore.getResourceInfo(:resource_id)`

`:resource_id` - UUID of resource from `.getPackageInfo()`.

##### CKAN APIs

###### ✅ datastore_query

Available at: `dataDotGov.DataStore.query(:resource_id, :query)`

`:resource_id` - UUID of CKAN API resource, note that this is not the same as the `:resource_id` from `resource_metadata`.

`:query` - additional search parameters for querying the resource identified by `:resource_id`.

###### Others

Add on to this if you've created a function endpoint for this!

## Development & Contribution
### Setting up
#### Fork and Install Dependencies
Fork this project and clone it locally.

Install dependencies with:

```bash
# npm install
#
# OR
#
# yarn install
```

#### Obtain an API Consumer Key
See the above section in Usage on obtaining an API Consumer Key

#### Create `.env` File
Create an `.env` file in the project root with the following content:

```env
PORT=<port for hosting>
DATAGOVSG_CONSUMER_KEY=<consumer key from above>
```

### Development
The `./index.js` file contains the main file which is included upon `require('data-dot-gov')`.

The `./lib` folder contains the code in a single-layer organisation manner. Files within `./lib`
should be named in lowercase according to the variables they expose.

### Testing
Tests are stored in `./test` and are run using the Mocha runner. Test coverage is
provided by Istanbul and is made available in `./coverage`. 

To run the tests, use `npm test`.

To run the tests with watching, use `npm run test-watch`

#### View Coverage Reports
Run the development server using `npm run dev` and you should be able to access the coverage
reports at http://localhost:PORT where `PORT` is a defined key in your `./.env` file.

# Cheers!