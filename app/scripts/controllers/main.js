'use strict';

/**
 * @ngdoc function
 * @name KioskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the KioskApp
 * mySocket
 */
angular.module('KioskApp').controller('MainCtrl', function ($scope, $location,$rootScope, $routeParams) {
    
    $scope.markeron = true;
    $scope.connected = false;
    $scope.currentObjectId = 0;
    $scope.currentObject = {};

     $scope.images = [{
	    src: 'images/image1.jpg',
	    title: 'Pic 1'
	  }, {
	     src: 'images/image2.jpg',
	    title: 'Pic 2'
	  }, {
	      src: 'images/image3.jpg',
	    title: 'Pic 3'
	  }];

	  $scope.callSection = function(id) {
	  			$scope.currentObjectId = id;
	  			$scope.currentObject = $scope.exhibit.objects[id];
	  			console.log($scope.currentObject);
	  			// change the path
				$location.path('/feature');
	  };

	  $scope.featureinit = function() {
	  		$scope.currentObjectId = $routeParams.featureId;
	  		$scope.currentObject = $scope.exhibit.objects[$routeParams.featureId];
	  };

	  $scope.exhibit = {
	  		objects : [
				  		{
				  			idkey: '0', 
				  			title: 	'The Potlatch',
				  			description: 'title',
				  			mapid	: 0,
				  			media : {
				  				coverimage : '1.jpg',
				  				slideshowimages : 	[
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
				  			title: 	'The Wedding Ceremony',
				  			description: 'title',
				  			mapid	: 0,
				  			media : {
				  				coverimage : '1.jpg',
				  				slideshowimages : 	[
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
				  			title: 	'The Hunt',
				  			description: 'title',
				  			mapid	: 0,
				  			media : {
				  				coverimage : '1.jpg',
				  				slideshowimages : 	[
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
				  			title: 	'Carving Wooden Masks',
				  			description: 'title',
				  			mapid	: 0,
				  			media : {
				  				coverimage : '1.jpg',
				  				slideshowimages : 	[
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
				  			title: 	'The Whale Hunt',
				  			description: 'title',
				  			mapid	: 0,
				  			media : {
				  				coverimage : '1.jpg',
				  				slideshowimages : 	[
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
				  			title: 	'Haida Manga',
				  			description: 'title',
				  			mapid	: 0,
				  			media : {
				  				coverimage : '1.jpg',
				  				slideshowimages : 	[
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
				  			title: 	'Raven And Eagle',
				  			description: 'title',
				  			mapid	: 0,
				  			media : {
				  				coverimage : '1.jpg',
				  				slideshowimages : 	[
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
				  			title: 	'The Forest',
				  			description: 'title',
				  			mapid	: 0,
				  			media : {
				  				coverimage : '1.jpg',
				  				slideshowimages : 	[
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
					  	}

		  			],
		  	maplocations : 	[
		  						{
		  							title 		: 'title',
		  							description : 'description',
		  							headerimage : 'mapimage.jpg',
		  							iconimage 	: 'iconimage.png',
		  							location 	: [20,30]
		  						}


		  					]

	  };

	
	 // mySocket.forward('ios', $scope);
	 // $scope.$on('socket:ios', function (ev, data) {
	 // 	console.log('ios');
  //     	$scope.theData = data;

  //     	$scope.markeron = false;
  //  		 $scope.connected = true;
  //   });

  }).controller('headerController', function ($rootScope, $scope, $routeParams,Data) {
        //If you want to use URL attributes before the website is loaded
        $scope.currentFeatureId = 1;
        $scope.currentFeature = {};
        $rootScope.$on('$routeChangeSuccess', function () {
            console.log($routeParams.featureId);
            if($routeParams.featureId) {
            	 console.log($routeParams.featureId);
            	 $scope.currentFeatureId = $routeParams.featureId;
            	 $scope.currentFeature = Data.objects[$routeParams.featureId];
            	 console.log($scope.currentFeature);
            }
        });
    }).directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope) {

    	scope.currentIndex = 0;

		scope.next = function() {

			if(scope.currentIndex < (scope.images.length-1)) {

				scope.currentIndex++;

			} else {
			
				scope.currentIndex=0;

			}
		};
		
		scope.prev = function() {
			
			if(scope.currentIndex>0) {
				
				scope.currentIndex--;
			
			} else {
				
				scope.currentIndex = scope.images.length-1;
			}
		};
		
		scope.$watch('currentIndex',function(){
			scope.images.forEach(function(image){
				image.visible=false;
			});
			scope.images[scope.currentIndex].visible=true;
		});
		
		/* Start: For Automatic slideshow*/
		
		var timer;
		
		var sliderFunc = function(){
			
			timer = $timeout(function(){
				scope.next();
				timer=$timeout(sliderFunc,5000);
			},5000);
		};
		
		sliderFunc();
		
		scope.$on('$destroy',function(){
			$timeout.cancel(timer);
		});
		
		/* End : For Automatic slideshow*/

    },
    templateUrl: 'views/slideshowmodule.html'
  };
});
