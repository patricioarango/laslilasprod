aplicacion.controller('catalogoCtrl',['$scope','$location','$http', function($scope, $location,$http){
      //$scope.status= 'test';
      $http.get('laslilas.json').success(function(data){
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
        $scope.detalles = data;
      });
  }]);


