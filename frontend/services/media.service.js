function mediaServices($http) 
{
    const self = this;

    self.listFiles = () => 
    { 
        return $http.get('/api/media/listFiles');
    }

    self.download = (file) => { return $http.post('/api/media/download', {file: file}); }
}

angular
    .module('ushar')
    .service('mediaServices', mediaServices);