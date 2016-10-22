let app = angular.module('insureSignApp', ['ngRoute']);
//
// // CONTROLLER
// require('./controllers/EventsController')(app);
//
// // SERVICE
// require('./services/EventsService')(app);



// ROUTER
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'EventsController',
      templateUrl: 'templates/main.html'
    })
}]);
