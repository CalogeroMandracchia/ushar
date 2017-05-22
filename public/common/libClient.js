(function (lib, $, undefined) {
    lib.resources =
        {
            status:
            {
                trading:
                {
                    seller:
                    {
                        1: 'Waiting for approval',
                        2: 'Rejected',
                        3: 'Approved',
                        4: 'Approved',
                        5: 'Approved',
                        6: 'Approved'
                    },
                    buyer:
                    {
                        1: 'To be approved',
                        2: 'Rejected',
                        3: 'Approved',
                        4: 'Approved',
                        5: 'Approved',
                        6: 'Approved'
                    }
                },

                logistic:
                {
                    seller:
                    {
                        3: 'Logistic info required',
                        4: 'BoL needed',
                        5: 'Logistic info filled',
                        6: 'Logistic info filled'
                    },

                    buyer:
                    {
                        3: 'ERROR',
                        4: 'Waiting for BoL',
                        5: 'Logistic info filled',
                        6: 'Logistic info filled'
                    }
                },

                inspector:
                {
                    5: 'Inspector details required',
                    6: 'Inspector Details added'
                }
            },

            labels:
            {
                name: 'Name',
                seller: 'Seller',
                buyer: 'Buyer',
                status: 'Status',
                notes: 'Notes',
                quantity: 'Quantity',
                primaryCost: 'Total Cost',
                qualitySpecs: 'Quality Specifications',
                vesselsName: 'Vessel name',
                layDays: 'Lay days',
                cargoReferenceNumber: 'Cargo Reference Number',
                harbourName: 'Harbour Name',
                secondaryCosts: 'Secondary Cost',
                insuranceCosts: 'Insurance Cost',
                smartAddress: 'Smart Contract Address'
            },

            ethereumBlockchain:
            {
                server: 'http://localhost:8545'
            }
        };
    lib.makePromise = function (promiseBody) {
        return new Promise(function (resolve, reject) { resolve(promiseBody); });
    };
    lib.rejectPromise = function (error) {
        let promise = new Promise(function (resolve, reject) { console.log(error); reject(error); });
        return promise;
    };
    lib.logError = function (err) { console.error(err); };
    lib.getDataFromArray = function (array) { return array.map(function (elem) { return elem.data }); }
    lib.saveToken = function (token, refreshProperties) {
        window.localStorage['commodityTrading-token'] = token;
        refreshProperties();
    };
    lib.getToken = function () {
        return window.localStorage['commodityTrading-token'];
    };
    lib.logout = function (refreshProperties) {
        window.localStorage.removeItem('commodityTrading-token');
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