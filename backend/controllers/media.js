const { getHomeDir, readdirfy, sendResponse } = require('./lib');

//download
const download = (req, res) => {
    try {
        const file = req.params.file;
        const client = req.ip;
        console.log("API download: request from: " + client + " for " + file);
    
        const path = `${getHomeDir()}/${file}`;
        //nota: NON usare lib.sendRes perché con res.download stai già mandando res
        // altrimenti scateni-> Error: Can't set headers after they are sent.
        res.download(path, (err) => {
            if (err) {
                console.log("API download failed: " + err.message);
                return;
            }
            console.log(`API download success: ${client} downloaded ${file}`);
            return;
        });
    } catch(error) {
        console.log(error);
    }
}

//list files
const listFiles = async (req, res) => {
    try {
        const dirPath = getHomeDir();
        console.log({ dirPath });
        const files = await readdirfy(dirPath);
        console.log("files");
        console.log({ files });
        sendResponse(res, 200, files);

        /*
        const list = (err, files) => { if (err) { return console.error("API listFiles error: " + err); } console.log("API listFiles success!", files); return lib.sendRes(res, 200, files); }
        const ifNotExist = (err) => { if (err && err.code != 'EEXIST') { console.error(err); return lib.sendRes(res, 500, err) } }
    
        //in node.js there has been a lot of debate in what using for checking if a file does exists or not.
        // https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_exists_path_callback
        // https://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js
        // here i'll just try to create it and log if the error is different from the one you get when you attemp to create a file that already exists.
        
        
        lib.makePromise(fs.mkdir(dirPath, ifNotExist)) //create dir
            .then(fs.readdir(dirPath, list)) //read files from dir
            .catch((err) => { console.error(err); return lib.sendRes(res, 500, err) });
            fs.readdir(dirPath, list);
    */
        
    } catch(error) {
        console.log("listFiles error", error);
    }
}


module.exports =
{
    download,
    listFiles
}