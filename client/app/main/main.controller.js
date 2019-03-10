'use strict';

angular.module('baselineApp')
  .controller('MainCtrl', function($scope, $http, socket) {
	  $scope.data = {
	  	hora: new Date(),
	  	duracion: '',
	  	saturacion: '',
	  	medicacion: 0,
	  	oxigeno: 0,
	  	sintomas: ''
	  }

	  $scope.ingresar = function(){
	  	$http.post('api/crisis/', $scope.data, function(response){
	  		console.log(response)
	  	})
	  	$scope.resetForm()
	  }

	  $scope.resetForm = function(){
	  	$scope.data = {
		  	hora: new Date(),
		  	duracion: '',
		  	saturacion: '',
		  	medicacion: 0,
		  	oxigeno: 0,
		  	sintomas: ''
		  }
	  }


  });
