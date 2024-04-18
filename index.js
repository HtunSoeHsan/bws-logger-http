const { instance } = require("./src/lib/axios.instance");
// const { BASE_URL } = require("./src/utils/constants");
// const {logger} = require("./src/lib/logger");
const BASE_URL = "http://localhost:3000/api";
/**
 * Represents a BWSLOGGER instance for logging.
 * @constructor
 * @param {Object} options - The options for BWSLOGGER.
 * @param {string} options.Apikey - Token for accessing the server.
 */
const BWSLOGGER = function ({ Apikey }) {
  let infoCd = null;
  let errorCd = null;
  let debugCd = null;
  //   let logLevel = [];

  /**
   * Configures the logging settings.
   * @method
   * @param {Object} options - The logging configuration options.
   * @param {string} options.info - Log level for info messages.
   * @param {string} options.error - Log level for error messages.
   * @param {string} options.debug - Log level for debug messages.
   */
  this.config = function ({ info, error, debug }) {
    infoCd = info;
    errorCd = error;
    debugCd = debug;
  };

  /**
   * Authenticates the user.
   * @method
   * @returns {Promise<string>} A promise resolving to a message indicating successful connection.
   */
  this.auth = function () {
    return instance
      .post(`${BASE_URL}/logs`, {}, { headers: { Apikey } })
      .then((data) => "connection success");
  };

  /**
   * Logs an info message.
   * @method
   * @param {Object} data - The data to be logged.
   * @returns {Promise<Object>} A promise resolving to the logged data.
   */
  this.info = function (data) {
    return instance
      .post(
        `${BASE_URL}/logs/create`,
        { logGroupCd: infoCd, logData: data },
        { headers: { Apikey: `Bearer ${Apikey}` } }
      )
      .then((data) => data.data);
  };

  /**
   * Logs an error message.
   * @method
   * @param {Object} data - The data to be logged.
   * @returns {Promise<Object>} A promise resolving to the logged data.
   */
  this.error = function (data) {
    return instance
      .post(
        `${BASE_URL}/logs/create`,
        { logGroupCd: errorCd, logData: data },
        { headers: { Apikey: `Bearer ${Apikey}` } }
      )
      .then((data) => data.data);
  };

  /**
   * Logs a debug message.
   * @method
   * @param {Object} data - The data to be logged.
   * @returns {Promise<Object>} A promise resolving to the logged data.
   */
  this.debug = function (data) {
    return instance
      .post(
        `${BASE_URL}/logs/create`,
        { logGroupCd: debugCd, logData: data },
        { headers: { Apikey: `Bearer ${Apikey}` } }
      )
      .then((data) => data.data);
  };
};

module.exports = {
  BWSLOGGER,
};