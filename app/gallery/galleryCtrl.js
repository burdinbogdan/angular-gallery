export default ['$scope', 'ImagesRes', 'InfScroll', function($scope, ImagesRes, InfScroll) {

	$scope.images = [];

	function getImages(start, count) {
		ImagesRes.getAll(res => {
			$scope.images = $scope.images.concat(res.slice(start, start + count));
			count++;
		});
	}

	var counter = 0;

	function loadMore() {
		getImages(counter, 20);
		counter += 20;
	}

	InfScroll.setScrollCb(loadMore);

	loadMore();

}];