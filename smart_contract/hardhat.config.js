require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/pLCkSfFd6iF18T9MNanFsjRNs6jovy3z',
      accounts: [
        'a6a3922910cfffc9cbe1814b58afbeb77ae4d6a20aa7eeab304568a415d1a94c',
      ],
    },
  },
}
