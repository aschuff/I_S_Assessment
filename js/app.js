let app = angular.module('insureSignApp', ['ngRoute']);

// ROUTER
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'EventsController',
      templateUrl: 'templates/main.html'
    })
}]);
