export function UserSummaryController($scope, $rootScope, AppService) {
    'ngInject';

    var ctrl = this;
    $scope.user = AppService.getUser();

    ctrl.restartQuiz = (user) => {
        UserSvc.saveUser(null)
    }
}
