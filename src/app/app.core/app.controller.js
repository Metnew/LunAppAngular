export default function AppController($scope, $log, $rootScope) {
    'ngInject';

    var stateChangeStartWatcher = $rootScope.$on('$stateChangeStart', (event, next) => {
        $rootScope.currentState = next.data;
        $rootScope.finishedSteps.push($rootScope.currentState.step);
    });

    $rootScope.$on('$destroy', stateChangeStartWatcher);

}
