import mongoose from 'mongoose';

import config from '../config';

const { db_username, db_password, db_host, db_port, db_name } = config;

// Local MongoDB
const local = `mongodb://${db_host}:${db_port}/${db_name}`;

// Remote MongoDB
const remote = `mongodb://${db_username}:${db_password}@${db_host}.mlab.com:${db_port}/${db_name}`;

const dbURL = {
  local,
  remote,
};

// DB Config
mongoose.Promise = global.Promise;
mongoose
  .connect(dbURL.remote)
  .then(() => console.log('Successful DB connection'))
  .catch(error => console.log(`Connection error: ${error}`));
