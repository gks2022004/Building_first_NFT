const { config } = require("dotenv");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url:process.env.STAGING_QUICKNODE_HTTP_URL,
      accounts:[process.env.PRIVATE_KEY],
    },
  },
};