export default () => {
	return {
		restrict: 'A',
		link: (scope, element, attrs) => {
			let clientHeight = element[0].clientHeight;

			element.bind('wheel', () => {
				if (element[0].scrollTop + clientHeight * 2 >= element[0].scrollHeight) {
					if (scope.InfScroll.getCanScroll()) {
						scope.InfScroll.getScrollCb()();
						scope.InfScroll.disableScroll();
						setTimeout(()=> scope.InfScroll.enableScroll(), 100);
					}
				}
			});

		},
		controller: ['$scope', 'InfScroll', function($scope, InfScroll) {
			$scope.InfScroll = InfScroll;
		}]
	}
}