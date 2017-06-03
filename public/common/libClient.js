(function (lib, $, undefined) 
{
    lib.makePromise = (promiseBody) => { return new Promise(function (resolve, reject) { resolve(promiseBody); }); };
    lib.rejectPromise = (error) => { const promise = new Promise( (resolve, reject) => { console.error(error); reject(error); }); return promise; };
    lib.logError = (err) => { console.error(err); };
    lib.getDataFromArray = (array) => { return array.map( (elem) => { return elem.data }); };
    lib.saveToken = (token, refreshProperties) => { window.localStorage['ushar-token'] = token; refreshProperties(); };
    lib.getToken = () => { return window.localStorage['ushar-token']; };

    lib.logout = function (refreshProperties) {
        window.localStorage.removeItem('ushar-token');
        refreshProperties();
    };
    lib.isLoggedIn = function () {
        let token = lib.getToken();
        if (!token || token == 'undefined')
            return false;

        let payload = JSON.parse(window.atob(token.split('.')[1]));
        return payload.exp > Date.now() / 1000;

    };
    lib.getCurrentUser = function () {
        if (lib.isLoggedIn()) {
            let token = lib.getToken();
            let payload = JSON.parse(window.atob(token.split('.')[1]));
            return payload;
        }
    };
} (window.lib = window.lib || {}, jQuery));