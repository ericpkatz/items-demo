angular.module('app')
  .directive('status', function(){
    return {
      scope: {},
      restrict: 'E',
      templateUrl: '/browser/templates/status.html',
      controller: function($scope, Service){
        Service.findAll()
          .then(function(items){
            $scope.items = items;
          })
          .catch(function(err){
            console.log(err);
          });
      
      }
    };
  });
