angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('checkIn', {
    url: '/page1',
    templateUrl: 'templates/checkIn.html',
    controller: 'checkInCtrl'
  })

  .state('currentLocation', {
    url: '/page2',
    templateUrl: 'templates/currentLocation.html',
    controller: 'currentLocationCtrl'
  })

  .state('items', {
    url: '/page3',
    templateUrl: 'templates/items.html',
    controller: 'itemsCtrl'
  })

  .state('boss', {
    url: '/page4',
    templateUrl: 'templates/boss.html',
    controller: 'bossCtrl'
  })

  .state('skills', {
    url: '/page5',
    templateUrl: 'templates/skills.html',
    controller: 'skillsCtrl'
  })

  .state('settings', {
    url: '/page6',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('pvP', {
    url: '/page7',
    templateUrl: 'templates/PvP.html',
    controller: 'PvPCtrl'
  })

  .state('credits', {
    url: '/page8',
    templateUrl: 'templates/credits.html',
    controller: 'creditsCtrl'
  })

  .state('blank', {
    url: '/page9',
    templateUrl: 'templates/blank.html',
    controller: 'blankCtrl'
  })
  
$urlRouterProvider.otherwise('/page1')

  

});