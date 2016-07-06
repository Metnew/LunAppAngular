export function UserSocialController($scope, $rootScope) {
    'ngInject';

    var ctrl = this;

    ctrl.finishStep = (user) => {
        UserSvc.saveUser(user)
    }
}
