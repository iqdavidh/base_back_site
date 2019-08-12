'use strict';
const dotenv = require('dotenv');

dotenv.config();

/**
 * Created by David on 18/07/2019.
 */



const isServerDev = process.env.NODE_ENV === "development";


const ServerConfig = {
  isServerDev: isServerDev,
  mongo: {
    urlServer: process.env.MONGO_URL_ROOT_CX,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  },
  front: {
    port: process.env.FRONT_PORT,
    url: process.env.URL_FRONT
  },
  back: {
    port: process.env.BACK_PORT,
    url: process.env.URL_BACK
  }
};


module.exports = ServerConfig;
