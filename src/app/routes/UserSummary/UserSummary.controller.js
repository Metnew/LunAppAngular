export function UserSummaryController($scope, $state, $rootScope, UserSvc, localStorageService) {
    'ngInject';

    var ctrl = this;
    $scope.user = UserSvc.getUser();

    ctrl.convertSocialNetworkKey = (key) => {
        let socNet;
        switch (key) {
            case 'fb':
                socNet = 'Facebook';
                break;
            case 'vk':
                socNet = 'Vkontakte';
                break;
            case 'ok':
                socNet = 'Odnoklassniki';
                break;
            case 'tw':
                socNet = 'Twitter';
                break;
        }
        return socNet + ':';
    }

    ctrl.restartQuiz = () => {
        localStorageService.set('finishedSteps', [])
        $rootScope.finishedSteps = [0]
        UserSvc.removeUser();
        $state.go('basic')
    }
}
