const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const logError = (err) => { console.error(err); };
const sendRes = (res, status, content) => { res.status(status);  res.json(content); };
const makePromise = (promiseBody) => { return new Promise(function (resolve, reject) { resolve(promiseBody); }); };
const rejectPromise = (error) => { const promise = new Promise( (resolve, reject) => { console.error(error); reject(error); }); return promise; };


module.exports = 
{
        logError,
        sendRes,
        makePromise,
        rejectPromise
}
