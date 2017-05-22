const HomeCtrl = function ($scope, $window) 
{
    $scope.file = "linkone";
    console.log("dormire non fa malissimo");
}

angular
    .module('ushar')
    .controller('homeCtrl', HomeCtrl);