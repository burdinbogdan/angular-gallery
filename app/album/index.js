'use strict';

import albumCtrl from './albumCtrl.js';
export default angular.module('galleryApp.album', ['ngRoute'])
	.controller('albumCtrl', albumCtrl).name;
