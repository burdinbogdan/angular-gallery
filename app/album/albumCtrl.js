export default ['$scope', '$routeParams', 'ImagesRes', 'InfScroll', function($scope, $routeParams, ImagesRes, InfScroll) {

	$scope.images = [];

	function getImages(start, count) {
		ImagesRes.getAlbumByID({
			id: $routeParams.id
		}, res => {
			$scope.images = $scope.images.concat(res.slice(start, start + count));
			count++;
		});
	}

	var counter = 0;
	let loadMore = function() {
		getImages(counter, 20);
		counter += 20;
	};

	InfScroll.setScrollCb(loadMore);

	loadMore();

}]