const HomeCtrl = function ($scope, $mdDialog, mediaServices, configServices) 
{
    $scope.title = "ushar";
    
    // $scope.files 
    mediaServices.listFiles()
        .then( (data) => { $scope.files = data.data} )
        .catch( lib.logError );

    // $scope.hostname
    configServices.getHostname()
      .then( (data) => { $scope.hostname = data.data.hostname} )
      .catch( lib.logError );

    // $scope.homedir
    configServices.getHomeDir()
      .then( (data) => { $scope.homedir = data.data.homedir} )
      .catch( lib.logError ); 

    // $scope.port
    configServices.getPort()
      .then( (data) => { $scope.port = data.data.port} )
      .catch( lib.logError );

  $scope.goToPerson = function(file, event) 
  {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Download')
        .textContent('http://' + $scope.hostname + ':' + $scope.port + '/api/media/download/' + file)
        .ariaLabel('File inspect')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

}

angular
    .module('ushar')
    .controller('homeCtrl', HomeCtrl);