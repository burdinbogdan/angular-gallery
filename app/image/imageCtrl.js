export default ['$scope', '$routeParams', 'ImagesRes', function($scope, $routeParams, ImagesRes) {

	ImagesRes.getByID({
		id: $routeParams.id
	}, res => $scope.image = res);

}]