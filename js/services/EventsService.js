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
  function getEvent () {}
  return {
    getEvent: getEvent
  }
});
