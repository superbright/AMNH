'use strict';

/**
 * @ngdoc function
 * @name KioskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the KioskApp
 * mySocket
 */
angular.module('KioskApp').controller('MainCtrl', function ($scope, $location,$rootScope, $routeParams,$sce,ngAudio,Data,State) {
    
    $scope.intromenuon = true;
    $scope.markeron = true;
    $scope.connected = false;
    $scope.currentObjectId = 0;
    $scope.currentObject = {};
    $scope.imageurl = '../images/dummy.png';
    $scope.featureState = 'video';
	$scope.animationStateVideo = 0; // if greater than 1 then fade in
    

    $scope.sound001 = ngAudio.load('sounds/dummy.mp3');

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

	   $scope.config = {
				sources: [
					{src: $sce.trustAsResourceUrl('videos/bunny.mp4'), type: 'video/mp4'}
			
				],
				theme: 'bower_components/videogular-themes-default/videogular.css'
			};
	

	  $scope.callSection = function(id) {
	  			$scope.currentObjectId = id;
	  			$scope.currentObject = $scope.exhibit.objects[id];
	  			$location.path($scope.currentObject.url + $scope.currentObject.idkey);
	  };

	  $scope.enterVideo = function() {
	   			
	  			$location.url('intro/:video');
	  };



	  $scope.maininit = function() {

	  			$scope.currentObject = {};

	  };

	  $scope.featureinit = function() {
	  		console.log($scope.animationState);
	  		$scope.currentObjectId = $routeParams.featureId;
	  		$scope.currentObject = $scope.exhibit.objects[$routeParams.featureId];
	  		//$scope.animationState++;
	  };

	  $scope.soundinit = function() {
	  		$scope.sound001.play();
	  };

	  $scope.getMap = function(id) {
	  			console.log('get map ' + id);
	  			$location.path('/map');
	  };

	 
	  $scope.showVideo = function() {
	  		$scope.animationStateVideo++;
	  		$scope.featureState = 'video';
	  };

	  $scope.showImage = function() {
	  		$scope.featureState = 'image';
	  };

	   $scope.showSong = function() {
	  		$scope.featureState = 'song';
	  };

	  $scope.showSlideshow = function() {
	  		$scope.featureState = 'slideshow';
	  };

	  $scope.getHeaderStyle = function(section) {

	  		if(section === $scope.featureState) {
	  			return { 'background-color': 'red' };
	  		} else {
	  			return '';
	  		}

	  };

	  $scope.updateFeatureSection = function(section) {

	  		if(section === $scope.featureState) {
	  			return true;
	  		} else {
	  			return false;
	  		}
	  };

	   $scope.getAnimationStyle = function() {
	 
	  		if(State.featureAnimationState > 1) {
	  			return 'animated appear';
	  		} else {
	  			return 'animated scaleUpFromLeft';
	  		}
	  };

	   $scope.getAnimationVideoStyle =function() {
	   		

	   	if(State.featureAnimationState > 1 || $scope.animationStateVideo > 0) {
	  			return 'animated appear';
	  		} else {
	  			return 'animated scaleUpFromLeft';
	  		}
	   };

	   $scope.getAnimationSideBarStyle = function() {
	 
	  		if(State.featureAnimationState > 1) {
	  			return 'animated appear';
	  		} else {
	  			return 'animated scaleUpFromLeft';
	  		}
	  };

	   $scope.getAnimationBottomStyle = function() {
	 
	  		if(State.featureAnimationState === 1) {
	  			return 'animated scaleUpFromLeft';
	  		} 
	  };

	  $scope.getAnimationContentStyle = function() {
	 
	  		if(State.featureAnimationState > 1) {
	  			return 'animated appear';
	  		} 
	  };

	  if($location.path().indexOf('/feature') > -1) {
        			$scope.animationState++;
      } 
	  $scope.exhibit = Data;




	
	 // mySocket.forward('ios', $scope);
	 // $scope.$on('socket:ios', function (ev, data) {
	 // 	console.log('ios');
  //     	$scope.theData = data;

  //     	$scope.markeron = false;
  //  		 $scope.connected = true;
  //   });

  }).controller('headerController', function ($rootScope, $scope, $routeParams,Data,$location,State) {
        //If you want to use URL attributes before the website is loaded
        $scope.currentFeatureId = 1;
        $scope.currentFeature = {};
        $scope.isLanding = true;
        $scope.isSlideshow = true;
        $scope.isIntro = false;
        $scope.isFeature = false;
        $scope.logo = 'logo.png';
        $rootScope.$on('$routeChangeSuccess', function () {
        	
        	var size = Object.size($routeParams);

        	console.log($location.path());

        	if($location.path() === '/') {
				$scope.isSlideshow = true;
        	} else {
        		$scope.isSlideshow = false;
        	}

        	if($location.path().indexOf('/intro') > -1) {
        			$scope.isIntro = true;
        	} else {
        		$scope.isIntro = false;
        	}
        	if($location.path().indexOf('/feature') > -1) {
        			console.log(State.featureAnimationState);
        			State.featureAnimationState++;
        			$scope.isFeature = true;
        	} else {
        		$scope.isFeature = false;
        		State.featureAnimationState = 0;
        	}
          
            if(size > 0 ) {
            	$scope.isLanding = false;
            	
            	$scope.logo = 'menu.png';
            } else {
            	$scope.isLanding = true;
            	$scope.logo = 'logo.png';
            }
            if($routeParams.featureId) {
            	 $scope.currentFeatureId = Number($routeParams.featureId);
            	 $scope.currentFeature = Data.objects[$routeParams.featureId];
            } else {
            	$scope.currentFeature = {};
            }
        });

         $scope.enterNavigation = function() {

	  			$scope.intromenuon = false;
	  			setTimeout(function(){ 
	  				$location.url('nation');
	  			}, 100);
	  			
	  };

        $scope.goNext = function() {
        //	console.log(Data.objects.length);
        	if($scope.currentFeatureId < Data.objects.length-5) {
	        	$scope.currentFeatureId++;
	        	$scope.currentFeature = Data.objects[$scope.currentFeatureId];
	        	$location.url($scope.currentFeature.url + $scope.currentFeature.idkey);
	        }

        };

        $scope.goPrev = function() {

        	if($scope.currentFeatureId > 0) {
	        	$scope.currentFeatureId--;
	        	$scope.currentFeature = Data.objects[$scope.currentFeatureId];
	        	//console.log(($scope.currentFeature.url + $scope.currentFeature.idkey));
	        	$location.url($scope.currentFeature.url + $scope.currentFeature.idkey);
        	}
        };

        Object.size = function(obj) {
		    var size = 0, key;
		    for (key in obj) {
		        if (obj.hasOwnProperty(key)) {
		        	size++;
		        }
		    }
		    return size;
		};

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
