const HomeCtrl = function ($scope, $mdDialog, mediaServices, userServices) 
{
    $scope.title = "ushar";
    

    mediaServices.listFiles()
        .then( (data) => { $scope.files = data.data} )
        .catch( lib.logError );

      
    userServices.getHostname()
      .then( (data) => { $scope.hostname = data.data} )
      .catch( lib.logError );

  $scope.goToPerson = function(file, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Download')
        .textContent('http://' + $scope.hostname + ':3000/api/media/download/' + file)
        .ariaLabel('File inspect')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

}

angular
    .module('ushar')
    .controller('homeCtrl', HomeCtrl);