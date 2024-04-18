const axios = require("axios");
const {BASE_URL} = require("../utils/constants")

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

module.exports = {
    instance
}
