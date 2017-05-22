    angular
    .module('ushar', ['ngRoute'])
    .config(['$routeProvider', ($routeProvider) =>
    {
        $routeProvider
            .when('/home', {
                templateUrl: '/home/home.view.html',
                controller: 'homeCtrl'
            })            
            .otherwise({ redirectTo: '/' });
    }]);