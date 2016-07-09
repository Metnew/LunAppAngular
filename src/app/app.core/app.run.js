export default function runBlock ($log, $rootScope, localStorageService) {
  'ngInject';
  $log.debug('runBlock end');
  $log.debug('Metnew deals with it.')
  let finishedSteps = localStorageService.get('finishedSteps');
  if (finishedSteps && finishedSteps.length > 0) {
      $rootScope.finishedSteps = finishedSteps;
  } else {
      $rootScope.finishedSteps = [0];
  }

  var localStorageUser = localStorageService.get('user')
  if (localStorageUser) {
      $rootScope.user = localStorageUser
  } else {
      $rootScope.user = {};
  }
  $rootScope.steps = {
      1: 'basic',
      2: 'geo',
      3: 'social',
      4: 'pet',
      5: 'summary'
  }
}
