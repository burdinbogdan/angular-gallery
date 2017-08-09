import photoCardDirective from './photoCardDirective.js';

export default angular.module('directives.photoCard', [])
    .directive('photoCard', photoCardDirective).name;