export function UserSvc($rootScope, localStorageService) {
    'ngInject';
    return {
        setUserValue: (key, value) => {
            $rootScope.user[key] = value;
        },

        saveUser: (user) => {
            if (user) {
                angular.merge($rootScope.user, user);
                localStorageService.set('user', $rootScope.user);
            }
        },

        getUser: () => {
            return $rootScope.user;
        },

        removeUser: () => {
            $rootScope.user = {};
            localStorageService.set('user', {})
        }
    }
}
