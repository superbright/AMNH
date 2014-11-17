'use strict';

/**
 * @ngdoc function
 * @name KioskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the KioskApp
 * mySocket
 */
angular.module('KioskApp').controller('MainCtrl', function ($scope) {
    
    $scope.markeron = true;
    $scope.connected = false;
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

	 
	 // mySocket.forward('ios', $scope);
	 // $scope.$on('socket:ios', function (ev, data) {
	 // 	console.log('ios');
  //     	$scope.theData = data;

  //     	$scope.markeron = false;
  //  		 $scope.connected = true;
  //   });

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
