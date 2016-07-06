export function UserBasicInfoController($scope, $rootScope, UserSvc) {
    'ngInject';

    var ctrl = this;

    ctrl.finishStep = (user) => {
        UserSvc.saveUser(user)
    }
}


export function UserSvc($rootScope) {
    'ngInject';
    return {
        setUserValue: (key, value) => {
            $rootScope.user[key] = value;
        },

        saveUser: (user) => {
            angular.merge($rootScope.user, user);
        },

        getUser: () => {
            return $rootScope.user;
        }
    }
}
