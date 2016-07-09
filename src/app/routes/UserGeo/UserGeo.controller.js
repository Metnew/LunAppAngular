export function UserGeoController($scope, $state, $rootScope, $log, EnumsSvc, UserSvc, $timeout) {
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
        let maxFinished = $rootScope.finishedSteps.sort((a, b) => {
            return b - a
        })[0];
        let biggestStep = ctrl.currentStateNumber > maxFinished ? ctrl.currentStateNumber : maxFinished;

        let haveCityNow = $scope.user.city && $scope.user.city.value;
        let haveCountryNow = $scope.user.country && $scope.user.country.value;

        let isAvaliabledForNextStep = ((biggestStep + 1 === step) && haveCityNow && haveCountryNow);
        return !(isFinished || isAvaliabledForNextStep || step === ctrl.currentStateNumber)
    }

    EnumsSvc.getCities((result) => {
        ctrl.cities = result.data;
        EnumsSvc.getCountries((result) => {
            ctrl.countries = result.data;
            if (!$scope.user.country) {
                $scope.user.country = {};
                $scope.user.city = {};
            }
            if ($scope.user.city && $scope.user.city.name) {
                $timeout(() => {
                    ctrl.selectCountry($scope.user.country.value)
                })
            }
        })
    })

    ctrl.selectCountry = () => {
        let countryValue = $scope.user.country.value;
        $scope.user.country.name = ctrl.countries[countryValue];
        ctrl.avaliableCities = ctrl.getAvaliableCities(countryValue);
        // let citiesLen = ctrl.avaliableCities.length
        if (!$scope.user.city || $scope.user.city.country != $scope.user.country.value) {
            $scope.user.city = ctrl.avaliableCities[0];
        }
        $log.debug($scope.user, ctrl.avaliableCities)
    }

    ctrl.getAvaliableCities = (countryValue) => {
        var arr = [];
        $log.debug(countryValue)
        for (var key in ctrl.cities) {
            let city = ctrl.cities[key];
            city.value = Number(key);
            if (city.country === Number(countryValue)) {
                arr.push(city);
            }
        }
        return arr
    }

    ctrl.goToStep = (step) => {
        $log.debug(step)
        if (ctrl.currentStateNumber < step) {
            let user = angular.copy($scope.user);
            if (!user.city || !user.city.value || !user.country || !user.country.value) {
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
