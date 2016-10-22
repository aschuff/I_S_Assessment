(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
app.controller('EventsController', function($scope, $location, EventService) {
  $scope.eventList = EventService.getEvent();
  // $scope.mainEvents = {
  //    event_name: '',
  //    place: '',
  //    time: '',
  // };

  // GET REQUEST
  // scope.getEvent = function() {
        // $http({
        //   method: 'GET',
        //   url: 'url here',
        // }).then(function(response) {
        //   console.log(response);
          // $scope.theEvent = response.data[0]; //might not need the [0]
        // })
// };
  // $scope.getEvent();   <<CALL THE FUNCTION
});

},{}],2:[function(require,module,exports){
let app = angular.module('insureSignApp', ['ngRoute']);

// CONTROLLER
require('./controllers/EventsController')(app);

// SERVICE
require('./services/EventsService')(app);



// ROUTER
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'EventsController',
      templateUrl: 'templates/eventsHomeTemplate.html'
    })
}]);

},{"./controllers/EventsController":1,"./services/EventsService":3}],3:[function(require,module,exports){
app.factory('EventsService', function($http){
  // let eventArray = [];
  //
  // $http({
  //   method: 'GET',
  //   url: ''
  // }).then(function(response){
  //   console.log('events:', response);
  //   let eventList = response.data
  //   angular.copy(eventList, eventArray)
  // })
  // return: function() {
  //   getEvent: function(){
  //     return eventArray
  //   }
  // };
});

},{}]},{},[2])