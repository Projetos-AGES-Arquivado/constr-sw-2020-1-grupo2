/* eslint-disable @typescript-eslint/camelcase */

export default {
  development: {
    db_url: process.env.MONGO_URI,
  },
  homolog: {
    db_url: process.env.MONGO_URI,
  },
  prod: {
    db_url: "",
  },
};
