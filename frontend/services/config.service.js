function configServices($http) 
{
    const self = this;

    //getHostname
    self.getHostname = () => { return $http.get('api/config/getHostname'); }

    //getHomeDir
    self.getHomeDir = () => { return $http.get('api/config/getHomeDir'); }
}


angular
    .module('ushar')
    .service('configServices', configServices);