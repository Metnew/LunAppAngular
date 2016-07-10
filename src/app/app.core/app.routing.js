export default function AppRouting($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    // let defaultPath = '/'
    // if ($location.host().match('github.io')) {
    let defaultPath = '/LunAppAngular';
    // }
    $urlRouterProvider.otherwise(defaultPath);
    $locationProvider.html5Mode(true);

    $stateProvider
    // Dashboard
        .state('basic', {
            url: defaultPath,
            templateUrl: 'app/routes/UserBasicInfo/UserBasicInfo.html',
            controller: 'UserBasicInfoController',
            controllerAs: 'ctrl',
            data: {
                pageTitle: 'Basic Info',
                state: 1,
                description: '1. Insert your name and email'
            },
            resolve: {

            }
        })
        .state('geo', {
            url: defaultPath + '/geo',
            templateUrl: 'app/routes/UserGeo/UserGeo.html',
            controller: 'UserGeoController',
            controllerAs: 'ctrl',
            data: {
                pageTitle: 'Geo Info',
                state: 2,
                description: '2. Select your country and city'
            },
            resolve: {

            }
        })
        .state('social', {
            url: defaultPath + '/social',
            templateUrl: 'app/routes/UserSocial/UserSocial.html',
            controller: 'UserSocialController',
            controllerAs: 'ctrl',
            data: {
                pageTitle: 'Social Info',
                state: 3,
                description: '3. Select your social networks'
            },
            resolve: {}
        })
        .state('pet', {
            url: defaultPath + '/pet',
            templateUrl: 'app/routes/UserPet/UserPet.html',
            controller: 'UserPetController',
            controllerAs: 'ctrl',
            data: {
                pageTitle: 'Pet Info',
                state: 4,
                description: '4. Select your favorite cat'

            },
            resolve: {}
        })
        .state('summary', {
            url: defaultPath + '/summary',
            templateUrl: 'app/routes/UserSummary/UserSummary.html',
            controller: 'UserSummaryController',
            controllerAs: 'ctrl',
            data: {
                pageTitle: 'Summary',
                state: 5
            },
            resolve: {}
        })
}
