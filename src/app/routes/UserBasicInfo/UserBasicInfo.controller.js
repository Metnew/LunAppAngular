export function UserBasicInfoController($scope, $rootScope, $log, $state, UserSvc) {
    'ngInject';

    var ctrl = this;
    ctrl.currentState = $state.current;
    ctrl.currentStateNumber = ctrl.currentState.data.state;
    $scope.user = UserSvc.getUser();

    ctrl.isStepFinished = (step) => {
        let isFinished = $rootScope.finishedSteps.indexOf(step) > -1;
        return isFinished;
    }

    ctrl.isDisabledStep = (step) => {
        let isFinished = ctrl.isStepFinished(step);
        let haveEmailName = $scope.user.name && $scope.user.email
        let maxFinished = $rootScope.finishedSteps.sort((a, b) => {
            return b - a
        })[0];
        let biggestStep = ctrl.currentStateNumber > maxFinished ? ctrl.currentStateNumber : maxFinished;
        let isAvaliabledForNextStep = (biggestStep + 1 == step) && haveEmailName;
        return !(isFinished || isAvaliabledForNextStep || step === ctrl.currentStateNumber);
    }

    ctrl.goToStep = (step) => {
        if(step > ctrl.currentStateNumber) {
            let user = angular.copy($scope.user);
            if (!user.email || !user.name) {
                return;
            }
            if (!ctrl.isStepFinished(ctrl.currentStateNumber)) {
                $rootScope.finishedSteps.push(ctrl.currentStateNumber);
            }
            UserSvc.saveUser(user);
        }
        $state.go($rootScope.steps[step]);
    }
}
