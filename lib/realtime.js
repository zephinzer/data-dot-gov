function RealTime() {
  return {
    Environment: (require('./realtime.environment')).bind(this)(),
    Transport: (require('./realtime.transport')).bind(this)(),
  }
};

exports = module.exports = RealTime;