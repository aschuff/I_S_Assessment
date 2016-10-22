app.factory('DataService', function($http){
  var getData = function() {
    return $http.get('https://z1yhjmvqc2.execute-api.us-east-1.amazonaws.com/latest/documents?sender=kris@beamreachsoftware.com&start=2016-08-10&end=2016-08-13')
  }
  return {
    getData: getData
  }

});
