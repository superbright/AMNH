'use strict';

/**
 * @ngdoc overview
 * @name KioskApp
 * @description
 * # devAKioskApppp
 *
 * Main module of the application.
 */
angular
  .module('KioskApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
    // 'btford.socket-io',
    // 'monospaced.qrcode'
  ]).config(function ($routeProvider) { //stateProvider
    $routeProvider
      .when('/the-app', {
        templateUrl: 'views/the-app.html',
        controller: 'MainCtrl'
      })
      .when('/video-chat', {
        templateUrl: 'views/video-chat.html',
        controller: 'MainCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MainCtrl'
      })
      .when('/soundscape', {
        templateUrl: 'views/soundscape.html',
        controller: 'MainCtrl'
      })
      .when('/nation', {
        templateUrl: 'views/nation.html',
        controller: 'MainCtrl'
      })
      .when('/intro', {
        templateUrl: 'views/intro.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/slide', {
        templateUrl: 'views/slideshowtemp.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

        // $stateProvider
        //     .state('index', {
        //       url: '/',
        //       views: {
        //         'viewA': { templateUrl: 'views/slideshowtep.html' },
        //         'footerView': { templateUrl: 'views/footer.html' }
        //       }
        //     })
        //     .state('route1', {
        //       url: '/route1',
        //       views: {
        //         'viewA': { template: 'route1.viewA' },
        //         'viewB': { template: 'route1.viewB' }
        //       }
        //     })
        //     .state('route2', {
        //       url: '/route2',
        //       views: {
        //         'viewA': { template: 'route2.viewA' },
        //         'viewB': { template: 'route2.viewB' }
        //       }
        //     });


       
  });

//   .factory('mySocket', function (socketFactory) {

//   var socket = socketFactory({
//             prefix: '',
//             ioSocket: io.connect('http://localhost:3000')
//         });
//   socket.forward('broadcast');
//   return socket;

// }).