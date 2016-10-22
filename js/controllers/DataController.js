app.controller('DataController', function($scope, $location, DataService) {
  DataService.getData().then(function (response) {
      $scope.response = response.data.Items
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
