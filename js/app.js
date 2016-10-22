let app = angular.module('insureSignApp', ['ngRoute']);

// ROUTER
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'DataController',
      templateUrl: 'templates/main.html'
    })
}]);

$(window).scroll(function() {
    if($(this).scrollTop() > 100) {
        $('.navbar-fixed-top').addClass('opaque');
    } else {
        $('.navbar-fixed-top').removeClass('opaque');
    }
});
