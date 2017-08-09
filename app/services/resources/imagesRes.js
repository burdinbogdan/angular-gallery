export default angular.module('services.resources.images',[])
	.factory('ImagesRes', ['$resource', ($resource) => {
	    return $resource('http://jsonplaceholder.typicode.com/:target/:id/:target2', null, {
	        getAll: {method:'GET', params:{target:'photos'}, isArray: true},
	        getAlbumByID: {method:'GET', params:{target:'albums', target2: 'photos'}, isArray: true},
	        getByID: {method:'GET', params:{target:'photos'}}
	    });
	}]).name;