'use strict';

import angular from './_bower_components/angular';
import ngRoute from './_bower_components/angular-route';
import ngResource from './_bower_components/angular-resource';
import resImages from './services/resources/imagesRes';
import dirInfScroll from './components/infScroll';
import dirPhotoCard from './components/photoCard';
import gallery from './gallery';
import album from './album';
import image from './image';

angular.module('galleryApp', [
	ngRoute,
	ngResource,
	resImages,
	dirInfScroll,
	dirPhotoCard,
	gallery,
	album,
	image
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: './gallery/gallery.html',
		controller: 'galleryCtrl'
	}).when('/album/:id', {
		templateUrl: './album/album.html',
		controller: 'albumCtrl'
	}).when('/image/:id', {
		templateUrl: './image/image.html',
		controller: 'imageCtrl'
	}).otherwise({
		redirectTo: '/'
	});
}]);