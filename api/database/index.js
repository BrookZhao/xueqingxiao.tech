const mongoose = require('mongoose');

const connect = (uri) => (new Promise((resolve, reject) => {
  mongoose.connection
    .on('error', error => reject(error))
    .on('close', () => console.log('Database connection closed.'))
    .on('reconnect', () => console.log('Database is reconnecting...'))
    .once('open', () => resolve(mongoose.connections[0]));
  mongoose.connect(uri, {
    autoReconnect: true,
  });
}));

module.exports = {
  connect,
};
