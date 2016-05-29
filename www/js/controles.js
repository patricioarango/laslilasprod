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

aplicacion.controller('carritoCtrl',['$scope','$location','$http', function($scope, $location,$http){
      console.log("aca");
  }]);

aplicacion.controller('catalogoCtrl',['$scope','$location','$http', function($scope, $location,$http){
    //localStorage.setItem("rc2016_firstime","0");
     //localStorage.setItem("rc2016_nombre","");
     //localStorage.setItem("rc2016_email","");
    if (localStorage.getItem("rc2016_firstime") === null || localStorage.getItem("rc2016_firstime") == "0") {
      $scope.loginview = true;
    } else {  
      $scope.loginview = false;
    }

    $scope.submitForm = function() {
      console.log($scope.user.name);  
      localStorage.setItem("rc2016_firstime","1");
      localStorage.setItem("rc2016_nombre",$scope.user.name);
      localStorage.setItem("rc2016_email",$scope.user.email);
      window.location.reload();
    };

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
         for (var i = 0; i < $scope.catalogo.length; i++) {
           // console.log($scope.catalogo[i].precio);
            $scope.catalogo[i].precio = parseFloat($scope.catalogo[i].precio);
         };
      });
     $scope.order = function(predicate,reverse) {
    $scope.reverse = reverse;
    $scope.predicate = predicate;
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



