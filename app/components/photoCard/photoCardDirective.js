export default () => {
    return {
        templateUrl: 'components/photoCard/photoCard.html',
        replace: false,
        restrict: 'E',
        scope: {
            photoUrl: '@',
            photoTitle: '@',
            photoRedirect: '@',
            albumUrl: '@',
            fullSize: '@'
        }
    }
}