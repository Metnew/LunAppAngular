export function UserGeoController($scope, $rootScope) {
    'ngInject';

    var ctrl = this;

    ctrl.finishStep = (user) => {
        UserSvc.saveUser(user)
    }
}
