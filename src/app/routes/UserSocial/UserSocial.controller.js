export function UserSocialController($scope, $rootScope, UserSvc, $state, $log) {
    'ngInject';

    var ctrl = this;
    ctrl.currentState = $state.current;
    ctrl.currentStateNumber = ctrl.currentState.data.state;
    $scope.user = UserSvc.getUser();
    const regexp = {
        tw: 'twitter.com',
        vk: 'vk.com',
        fb: 'fb.com',
        ok: 'ok.ru'
    }

    ctrl.getRegexUrl = (forNetwork) => {
        return 'http://' + regexp[forNetwork] + '/'
    }

    ctrl.isMatchRegexp = (forSite) => {
        $log.debug(forSite.match(regexp[forSite]))
        return (forSite.match(regexp[forSite]) !== null)
    }

    ctrl.addHttpToUrl = (forNetwork) => {
        // (forNetwork, event)
        let pattern = ctrl.getRegexUrl(forNetwork)
        if (!$scope.user.contacts[forNetwork] || $scope.user.contacts[forNetwork].indexOf(pattern) === -1) {
            $scope.user.contacts[forNetwork] = pattern
        }
    }

    if (!$scope.user.contacts) {
        $scope.user.contacts = {
            tw: null,
            vk: null,
            fb: null,
            ok: null
        }
    } else {
        for (let key in $scope.user.contacts) {
            let contact = $scope.user.contacts[key];
            let upperCaseKey = key.toUpperCase();
            if (contact === ctrl.getRegexUrl(key) || !contact) {
                $scope["userHave" + upperCaseKey] = false;
                $scope.user.contacts[key] = null;
            } else {
                $scope["userHave" + upperCaseKey] = true;
            }
        }
    }

    $scope.$watch('user.contacts', (newValue) => {
        if (newValue) {
            let copy = angular.copy(newValue)
            for (let key in newValue) {
                let regexUrl = ctrl.getRegexUrl(key);
                if(copy[key] && !copy[key].match(regexUrl)) {
                    newValue[key] = regexUrl
                }
                if (!copy[key] || copy[key] === regexUrl) {
                    delete copy[key]
                }
            }
            $scope.haveSocialNetworks = !angular.equals({}, copy)
        }
    }, true)

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
        let isAvaliabledForNextStep = ((biggestStep + 1 === step) && $scope.haveSocialNetworks);
        return !(isFinished || isAvaliabledForNextStep || step == ctrl.currentStateNumber)
    }

    ctrl.goToStep = (step) => {
        $log.debug(step)
        if (ctrl.currentStateNumber < step) {
            let user = angular.copy($scope.user.contacts);
            for (let key in user) {
                if (!user[key] || !$scope['userHave' + key.toUpperCase()] || user[key] === ctrl.getRegexUrl(key)) {
                    user[key] = null
                }
            }
            if (!$scope.haveSocialNetworks) {
                $log.debug('HAVE NO NETWORKS')
                return;
            }
            if (!ctrl.isStepFinished(ctrl.currentStateNumber)) {
                $rootScope.finishedSteps.push(ctrl.currentStateNumber);
            }
            $log.debug(user)
            UserSvc.saveUser(user);
        }
        $state.go($rootScope.steps[step]);
    }
}
