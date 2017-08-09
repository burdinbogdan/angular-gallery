'use strict';

import imageCtrl from './imageCtrl.js';
export default angular.module('galleryApp.image', ['ngRoute'])
	.controller('imageCtrl', imageCtrl).name;
