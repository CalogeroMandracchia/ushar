function userServices($http) 
{
    const self = this;

    self.getHostname = (file) => { return $http.get('/user/getHostname'); }
}




angular
    .module('ushar')
    .service('userServices', userServices);