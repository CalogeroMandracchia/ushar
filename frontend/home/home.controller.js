const HomeCtrl = function ($scope, $mdDialog, mediaServices) 
{
    $scope.title = "ushar";
    
    mediaServices.listFiles()
        .then( (data) => { $scope.files = data.data} )
        .catch( lib.logError );


    console.log("pippo" + mediaServices.listFiles());

  $scope.goToPerson = function(file, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Download')
        .textContent('http://ITCMANDRACCHI42:3000/api/media/download/' + file)
        .ariaLabel('File inspect')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

}

angular
    .module('ushar')
    .controller('homeCtrl', HomeCtrl);