
const lib = require('../../public/common/libServer');

//download
const download = (req, res) =>
{
  const root = "C:/Users/cmandracchia/Desktop";
  const path = root + '/' + req.params.file;

  res.download(path,  (err) => { if (err) { console.error(res.headersSent); return; }  console.log("download done!"); });
}



module.exports = {
  download,
}