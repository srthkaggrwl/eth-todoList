module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",  // Local host
      port: 7545,   // Port on which Ganache is running
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}