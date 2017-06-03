(function (exports, require, module, __filename, __dirname) { 
const lib = require('../../public/common/libServer');

//download
const download = (req, res) =>
{
    const root = "C:/Users/cmandracchia/Desktop";
    const path = root + '/' + req.params.file;
    res.download(path,  (err) => 
    { 
        if (err)
        {
            console.error(err.message);
            console.error("header sent: " + res.headersSent); 
            return; 
        }  
        console.log("downloaded! -> " + req.params.file); 
    });
}



module.exports = {
  download,
}
});