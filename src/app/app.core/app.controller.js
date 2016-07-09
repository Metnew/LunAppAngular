export default function AppController($scope, $state, $log, $rootScope, localStorageService) {
    'ngInject';

    // var ctrl = this;
    var stateChangeStartWatcher = $rootScope.$on('$stateChangeStart', (event, next) => {
        $rootScope.currentState = next.data;
        $log.debug($rootScope.finishedSteps)
        $rootScope.finishedSteps = $rootScope.finishedSteps || localStorageService.get('finishedSteps');
        let stepId = $rootScope.currentState.state;
        let maxFinished = $rootScope.finishedSteps.sort((a,b) => {
                return b - a
            })[0];
            $log.debug(maxFinished)
        let nextStepShouldBe = (maxFinished) + 1;
        if (nextStepShouldBe === stepId) {
            $log.debug(`Go to step ${nextStepShouldBe}`)
            localStorageService.set('finishedSteps', $rootScope.finishedSteps);
        } else if(stepId < nextStepShouldBe) {
            $log.debug(`Go to step ${stepId}`)
        } else if (nextStepShouldBe < stepId) {
            $log.debug(`Go to step ${stepId}, but unable, so you go to ${nextStepShouldBe}`)
            event.preventDefault()
            $state.go($rootScope.steps[nextStepShouldBe])
        }
    });

    $rootScope.$on('$destroy', stateChangeStartWatcher);

}
