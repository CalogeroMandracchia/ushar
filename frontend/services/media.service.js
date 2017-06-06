function mediaServices($http) 
{
    const self = this;

    self.listFiles = () => { return $http.get('/api/media/listFiles'); }

    self.download = (file) => { return $http.get('/api/media/download/' + file); }
}

angular
    .module('ushar')
    .service('mediaServices', mediaServices);