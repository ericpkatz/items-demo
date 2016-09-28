angular.module('app')
  .directive('list', function(){
    return {
      scope: {},
      templateUrl: '/browser/templates/list.html',
      controller: function($scope, Service){
        $scope.fizz = function(){
          console.log(Math.random());
          return 'fizz';
        };
        $scope.create = function(){
          Service.create($scope.item)
            .then(function(){
              $scope.item = null;
            })
            .catch(function(err){
              console.log(err);
            });
        
        };
        $scope.destroy = function(item){
          Service.destroy(item)
            .then(function(items){
              $scope.items = items;
            })
            .catch(function(err){
              console.log(err);
            });
        
        };
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
