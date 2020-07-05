const os = require('os');
const lib = require('./lib');

//get hostname
const getHostname = (req, res) => {
      try {
            let hostname = os.hostname();
            hostname = /[^.]*/.exec(hostname)[0];
            console.log("hostname: " + hostname);
            lib.sendRes(res, 200, { "hostname": hostname });
      } catch(error) {
            console.log("error getHostname", getHostname);
      }
};

const getHomeDir = (req, res) => {
      const homeDir = lib.getHomeDir();
      console.log("homeDir: " + homeDir);
      lib.sendRes(res, 200, { "homeDir": homeDir });
};

const getPort = (req, res) => {
      const port = lib.getPort();
      console.log("port: " + port);
      lib.sendRes(res, 200, { "port": port });
};

module.exports = {
      getHostname,
      getHomeDir,
      getPort
}