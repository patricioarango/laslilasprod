aplicacion.filter('getById', function() {
  return function(input, id) {
    var i=0, len=input.length;
    for (; i<len; i++) {
      if (+input[i].id == +id) {
        return input[i];
      }
    }
    return null;
  }
});


aplicacion.controller('catalogoCtrl',['$scope','$location','$http', function($scope, $location,$http){
  localStorage.setItem("logueado","0");
  $scope.loginview = false;
  
      //$scope.status= 'test';
      $http.get('razas.json').success(function(data){
        $scope.razas = data;

      });
  }]);

aplicacion.controller('subcatalogoCtrl',['$scope', '$routeParams', '$http','$sce','$rootScope',
    function($scope, $routeParams, $http,$sce,$rootScope) {
      $scope.id_raza = $routeParams.id_raza;
      $scope.nombre_raza = $routeParams.nombre_raza;
      $http.get('laslilas.json').success(function(data){
        $scope.catalogo = data;
      });
  }]);

aplicacion.controller('detalleCtrl',['$scope', '$routeParams', '$http','$sce','$rootScope','$filter',
    function($scope, $routeParams, $http,$sce,$rootScope,$filter) {
      $scope.id_toro = $routeParams.id_detalle;
      $http.get('laslilas.json').success(function(data){
        var found = $filter('getById')(data, $scope.id_toro);
         console.log(found);
         //$scope.selected = JSON.stringify(found);


        $scope.detalle = found;
      });
  }]);

aplicacion.controller('filtrosCtrl',['$scope', '$routeParams', '$http','$sce','$rootScope','$filter',
    function($scope, $routeParams, $http,$sce,$rootScope,$filter) {
      $http.get('laslilas.json').success(function(data){
        $scope.catalogo = data;
      });
     $scope.setSort = function(type) { 
      //if(type.toLowerCase()==$scope.sort)
      $scope.sort = type.toLowerCase(); 
    };


   $scope.colourIncludes = [];
    $scope.includeColour = function(colour) {
        var i = $.inArray(colour, $scope.colourIncludes);
        if (i > -1) {
            $scope.colourIncludes.splice(i, 1);
        } else {
            $scope.colourIncludes.push(colour);
        }
    }
    
    $scope.colourFilter = function(fruit) {
        if ($scope.colourIncludes.length > 0) {
            if ($.inArray(fruit.aptosvaquillonas, $scope.colourIncludes) < 0)
                return;
        }
        
        return fruit;
    }

  }]);


