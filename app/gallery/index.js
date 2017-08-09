'use strict';

import galleryCtrl from './galleryCtrl.js';
export default angular.module('galleryApp.gallery', [])
	.controller('galleryCtrl', galleryCtrl).name;
