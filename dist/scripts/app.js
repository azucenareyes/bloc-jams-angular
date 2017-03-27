//Here is an empty function
(function() {
  // router
  // This is a function with two arguments
  function config($stateProvider, $locationProvider) {
    // It looks like these arguments have objects inside of them.
    $locationProvider //not sure how this works here
      .html5Mode({
        enabled:true,  // key value pairs
        requireBase: false
      });
    $stateProvider
    //  .something means a method??
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      })
      .state('album', {
        url: '/album',
        templateUrl: '/templates/album.html'
      })
      .state('collection', {
        url: '/collection',
        controller: 'CollectionCtrl as collection',
        templateUrl: '/templates/collection.html'
      });
  }
  angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();
