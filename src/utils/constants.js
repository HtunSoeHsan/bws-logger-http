const dotenv = require("dotenv");
dotenv.config({ path: `.env` });

const { NODE_ENV, DB_LOGGING } = process.env;
const { REDIS_HOST, REDIS_PORT, REDIS_MAX_RETRY } = process.env;
const {
  DEV_DB_USERNAME,
  DEV_DB_PASSWORD,
  DEV_DB_DATABASE,
  DEV_DB_HOST,
  DEV_DB_POOL_SIZE,
} = process.env;
const {
  PROD_DB_USERNAME,
  PROD_DB_PASSWORD,
  PROD_DB_DATABASE,
  PROD_DB_HOST,
  PROD_DB_POOL_SIZE,
} = process.env;

const {BASE_URL} = process.env;
module.exports = {
  BASE_URL,
};
