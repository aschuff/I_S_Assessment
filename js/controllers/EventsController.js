app.controller('EventsController', function($scope, $location, EventsService) {
  EventsService.getTopReddits().then(function (reddits) {
      $scope.topReddits = reddits.data.data.children
    })

  // $scope.eventList = EventsService.getEvent();
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
