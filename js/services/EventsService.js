app.factory('EventsService', function($http){

  var getRedditsBySubReddit = function (subreddit){
    return http.get('https://www.reddit.com/r/' + subreddit)
  };

  var getTopReddits = function() {
    return $http.get('https://www.reddit.com/.json')
  }

  return {
    getRedditsBySubReddit: getRedditsBySubReddit,
    getTopReddits: getTopReddits
  }

  // let redditArray = [];
  //
  // $http({
  //   method: 'GET',
  //   url: 'https://www.reddit.com/.json'
  // }).then(function(response){
  //   console.log('events:', response);
  //   let reddits = response.data
  //   angular.copy(reddits, redditArray)
  // })
  // return: function() {
  //   getEvent: function(){
  //     return eventArray
  //   }
  // };
  // function getEvent () {}
  // return {
  //   getEvent: getEvent
  // }
});
