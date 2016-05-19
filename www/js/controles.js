aplicacion.controller('catalogoCtrl',['$scope','$location','$http', function($scope, $location,$http){
      //$scope.status= 'test';
      $http.get('data.json').success(function(data){
        $scope.razas = data;
      });
  }]);

aplicacion.controller('subcatalogoCtrl',['$scope', '$routeParams', '$http','$sce','$rootScope',
    function($scope, $routeParams, $http,$sce,$rootScope) {
      $scope.id_raza = $routeParams.id_raza;
      $scope.nombre_raza = $routeParams.nombre_raza;
      $http.get('catalogo.json').success(function(data){
        $scope.catalogo = data;
      });
  }]);

aplicacion.controller('detalleCtrl',['$scope', '$routeParams', '$http','$sce','$rootScope',
    function($scope, $routeParams, $http,$sce,$rootScope) {
      $scope.detalle_variable = $routeParams.id_detalle;
      /*$http.get('php/get_cursos.php').success(function(data){
        $scope.catalogo = data;
      });*/
  }]);


