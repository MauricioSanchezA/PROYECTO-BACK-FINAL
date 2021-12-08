const mongoose = require('mongoose');

const host = 'localhost';
const port = '27017';
const db = 'hr';

const RemoteHost = 'cluster0.krgxw.mongodb.net';
const RemoteUser = 'hradmin';
const RemotePass = 'admin';
const Remotedb = 'hr';

exports.mongoConnect = () => {
  // const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
  const mongoStringConnection = `mongodb+srv://${RemoteUser}:${RemotePass}@${RemoteHost}/${Remotedb}?retryWrites=true&w=majority`;

  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    'error',
    console.error.bind(console, 'Mongodb connection error')
  );
};
