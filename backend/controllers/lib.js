const os = require('os');

const logError = (err) => { console.error(err); };
const sendRes = (res, status, content) => { res.status(status);  res.json(content); };
const makePromise = (promiseBody) => { return new Promise(function (resolve, reject) { resolve(promiseBody); }); };
const rejectPromise = (error) => { const promise = new Promise( (resolve, reject) => { console.error(error); reject(error); }); return promise; };

const getHomeDir = () => 
{
    try
    {
        const folder = 'Desktop/ushar';
        const dir = os.homedir() + '/' + folder;
        return dir;
    }
    catch (error)
    {
        console.error(error);
        return 'error';
    }
};

module.exports = 
{
    logError,
    sendRes,
    makePromise,
    rejectPromise,
    getHomeDir
}
