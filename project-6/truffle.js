var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = 'private truly recall explain season save glove dumb client marble minimum trophy'
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/6e269261c37d48f58390064c6879e6eb')
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};
