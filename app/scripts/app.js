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
    'ui.router',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'ngAudio'
    // 'btford.socket-io',
    // 'monospaced.qrcode'
  ]).factory('State', function () {

        var globalState = {};
        globalState.featureAnimationState = 0;

        return globalState;
  
  }).factory('Data', function () {

   var exhibit = {
        objects : [
              {
                idkey: '0', 
                title:  'The Potlatch',
                description: 'title',
                url: '/feature/',
                mapid : 0,
                media : {
                  coverimage : '1.jpg',
                  coverimagethumb : '1_thumb.jpg',
                  slideshowimages :   [
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              },
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              }
                            ],
                  video: 'video.mp4',
                  audio: 'audio.mp3'
                },
                likes : 4,
                relatedobjects : [0,1,2]
              },
              {
                idkey: '1', 
                title:  'The Wedding Ceremony',
                description: 'title',
                url: '/feature/',
                mapid : 0,
                media : {
                  coverimage : '2.jpg',
                  coverimagethumb : '2_thumb.jpg',
                  slideshowimages :   [
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              },
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              }
                            ],
                  video: 'video.mp4',
                  audio: 'audio.mp3'
                },
                likes : 0,
                relatedobjects : [0,1,2]
              },
              {
                idkey: '2', 
                title:  'The Hunt',
                description: 'title',
                url: '/feature/',
                mapid : 0,
                media : {
                  coverimage : '1.jpg',
                  coverimagethumb : '1_thumb.jpg',
                  slideshowimages :   [
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              },
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              }
                            ],
                  video: 'video.mp4',
                  audio: 'audio.mp3'
                },
                likes : 0,
                relatedobjects : [0,1,2]
              },
              {
                idkey: '3', 
                title:  'Carving Wooden Masks',
                description: 'title',
                url: '/feature/',
                mapid : 0,
                media : {
                  coverimage : '2.jpg',
                  coverimagethumb : '2_thumb.jpg',
                  slideshowimages :   [
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              },
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              }
                            ],
                  video: 'video.mp4',
                  audio: 'audio.mp3'
                },
                likes : 0,
                relatedobjects : [0,1,2]
              },
              {
                idkey: '4', 
                title:  'The Whale Hunt',
                description: 'title',
                url: '/feature/',
                mapid : 0,
                media : {
                  coverimage : '1.jpg',
                  coverimagethumb : '1_thumb.jpg',
                  slideshowimages :   [
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              },
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              }
                            ],
                  video: 'video.mp4',
                  audio: 'audio.mp3'
                },
                likes : 0,
                relatedobjects : [0,1,2]
              },
              {
                idkey: '5', 
                title:  'Haida Manga',
                description: 'title',
                url: '/feature/',
                mapid : 0,
                media : {
                  coverimage : '2.jpg',
                  coverimagethumb : '2_thumb.jpg',
                  slideshowimages :   [
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              },
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              }
                            ],
                  video: 'video.mp4',
                  audio: 'audio.mp3'
                },
                likes : 0,
                relatedobjects : [0,1,2]
              },
              {
                idkey: '6', 
                title:  'Raven And Eagle',
                description: 'title',
                url: '/feature/',
                mapid : 0,
                media : {
                  coverimage : '1.jpg',
                  coverimagethumb : '1_thumb.jpg', 
                  slideshowimages :   [
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              },
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              }
                            ],
                  video: 'video.mp4',
                  audio: 'audio.mp3'
                },
                likes : 0,
                relatedobjects : [0,1,2]
              },
              {
                idkey: '7', 
                title:  'The Forest',
                description: 'title',
                url: '/feature/',
                mapid : 0,
                media : {
                  coverimage : '2.jpg',
                  coverimagethumb : '2_thumb.jpg', 
                  slideshowimages :   [
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              },
                              {
                                filename: '1.jpg',
                                caption: 'caption',
                                description : 'image description'

                              }
                            ],
                  video: 'video.mp4',
                  audio: 'audio.mp3'
                },
                likes : 0,
                relatedobjects : [0,1,2]
              },
              {
                idkey: '', 
                title:  'The Forest',
                description: 'title',
                url: '/sort'
              },
              {
                idkey: '', 
                title:  'The Forest',
                description: 'title',
                url: '/soundscape'
              },
              {
                idkey: '', 
                title:  'The Forest',
                description: 'title',
                url: '/video-chat'
              },
              {
                idkey: '', 
                title:  'The Forest',
                description: 'title',
                url: '/the-app'
              }




            ],
        maplocations :  [
                  {
                    title     : 'title',
                    description : 'description',
                    headerimage : 'mapimage.jpg',
                    iconimage   : 'iconimage.png',
                    location  : [20,30]
                  }


                ]

    };
    return  exhibit;
  }).config(function ($routeProvider) { //stateProvider
    $routeProvider
      .when('/tour', {
        templateUrl: 'views/tour.html',
        controller: 'MainCtrl'
      }) 
      .when('/sort', {
        templateUrl: 'views/sort.html',
        controller: 'MainCtrl'
      }) 
      .when('/feature/:featureId', {
        templateUrl: 'views/feature.html',
        controller: 'MainCtrl'
      })    
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
      .when('/intro/:id', {
        templateUrl: 'views/intro.html',
        controller: 'MainCtrl'
      })
      .when('/a', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/', {
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