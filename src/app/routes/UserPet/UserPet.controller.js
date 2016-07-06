export function UserPetController($scope, $rootScope) {
    'ngInject';

    var ctrl = this;

    ctrl.selectStep = () => {

    }

    ctrl.finishStep = (user) => {
        UserSvc.saveUser(user)
    }
}
