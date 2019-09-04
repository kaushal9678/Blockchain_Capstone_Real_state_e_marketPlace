
require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "between slam inhale pet friend half label mixture identify seed sadness error";
const infuraKey = "6a8d620faa0c4028adac14e8796732ca";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*" // Any network (default: none)
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: function(){
        return new HDWalletProvider(
        mnemonic,
         `https://rinkeby.infura.io/v3/${infuraKey}`
       )
     },
      network_id: "4",
      //gas: 4500000,
      //gasPrice: 10000000000,
      from: "0x2768FD6671C00a61960562CbE4057b7ed112Eb82"
    }
  },


  // Configure your compilers
  compilers: {
    solc: {
       version: "0.5.1"    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
