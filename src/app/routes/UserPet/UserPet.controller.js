export function UserPetController($scope, $rootScope, UserSvc, $state, $location, $log) {
    'ngInject';

    var ctrl = this;
    ctrl.currentState = $state.current;
    ctrl.currentStateNumber = ctrl.currentState.data.state;
    $scope.user = UserSvc.getUser();
    $scope.user.pet = {
        type: null,
        url: null
    }
    $scope.haveNoPet = false;

    ctrl.isStepFinished = (step) => {
        let isFinished = $rootScope.finishedSteps.indexOf(step) > -1;
        return isFinished;
    }

    ctrl.isDisabledStep = () => {
        return false;
    }

    ctrl.pets = [{
        url: '/assets/images/cat1.jpg',
        type: 'cat'
    }, {
        url: '/assets/images/cat2.jpg',
        type: 'cat'
    }, {
        url: '/assets/images/cat3.jpg',
        type: 'cat'
    }, {
        url: '/assets/images/dog4.jpg',
        type: 'dog'
    }]

    if ($location.host().match('github.io')) {
        ctrl.pets.map((pet) => {
            pet.url = '/LunAppAngular' + pet.url;
            return pet;
        })
    }

    ctrl.selectPet = (pet) => {
        $scope.haveNoPet = false;
        $scope.user.pet = pet;
    }

    ctrl.isSelected = (pet) => {
        return angular.equals($scope.user.pet, pet)
    }

    ctrl.isCat = () => {
        if ($scope.user.pet.type === 'cat' || !$scope.user.pet.type) {
            return true
        }
        return false;
    }

    ctrl.goToStep = (step) => {
        $log.debug(step)
        let stepNow = ctrl.currentState.data.state;
        if (stepNow < step) {
            let user = angular.copy($scope.user);
            if (!user.pet.url || !ctrl.isCat()) {
                $scope.haveNoPet = true;
                return;
            }
            UserSvc.saveUser(user);
            $rootScope.finishedSteps.push(stepNow);
        }
        $state.go($rootScope.steps[step]);
    }
}
