export default () => {
    return {
        template: require('./photoCard.html'),
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