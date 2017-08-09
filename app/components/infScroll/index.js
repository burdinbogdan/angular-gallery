import infScrollServ from './infScrollServ.js';
import infScrollDirective from './infScrollDirective.js';

export default angular.module('components.infScroll', [])
	.directive('infScroll', infScrollDirective)
	.service('InfScroll', infScrollServ).name;