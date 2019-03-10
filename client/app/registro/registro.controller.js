'use strict';

angular.module('baselineApp')
  .controller('RegistroCtrl', function($scope, $http, socket, $log, $modal) {

    $http.get('api/crisis').then(function(response) {
      $scope.crisis = response.data;
      socket.syncUpdates('crisis', $scope.crisis)
    })

    $scope.delete = function(id) {
      $http.delete('api/crisis/' + id)
    }

    $scope.view = function(item) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'viewModal.html',
        controller: 'viewModalCtrl',
        resolve: {
          item: function() {
            return item
          }
        }
      })
    }
  })


angular.module('baselineApp')
  .controller('viewModalCtrl', function($scope, $modalInstance, item) {

  	$scope.item = item;

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel')
    }

  })
