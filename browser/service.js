angular.module('app')
  .factory('Service', function($http){
    var items = [];
    return {
      create: function(item){
        var that = this;
        return $http.post('/api/items/', item)
          .then(function(){
            return that.findAll();
          });
      },
      destroy: function(item){
        var that = this;
        return $http.delete('/api/items/' + item.id)
          .then(function(){
            return that.findAll();
          });
      },
      findAll: function(){
        return $http.get('/api/items')
          .then(function(result){
            angular.copy(result.data, items);
            return items;
          });
      }
    };
  });
