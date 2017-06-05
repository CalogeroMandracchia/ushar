const os = require("os");
const lib = require('./lib');

//get hostname
const getHostname = (req, res) => 
{
      let hostname = os.hostname();
      hostname = /[^.]*/.exec(hostname)[0]; 
      console.log("hostname: " + hostname);
      lib.sendRes(res, 200, { "hostname": hostname } );
};



const getHomeDir = (req, res) => 
{
      const dir = lib.getHomeDir();
      console.log("homeDir: " + dir);
      lib.sendRes(res, 200, { "homeDir": dir } );
};

module.exports = {
  getHostname,
  getHomeDir,
}