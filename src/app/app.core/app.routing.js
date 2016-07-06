export default function AppRouting($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
    // Dashboard
        .state('basic', {
            url: '/',
            templateUrl: 'app/routes/UserBasicInfo/UserBasicInfo.html',
            controller: 'UserBasicInfoController',
            controllerAs: 'ctrl',
            data: {
                pageTitle: 'Basic Info',
                state: 1
            },
            resolve: {

            }
        })
        .state('geo', {
            url: '/geo',
            templateUrl: 'app/routes/UserGeo/UserGeo.html',
            controller: 'UserGeoController',
            controllerAs: 'ctrl',
            data: {
                pageTitle: 'Geo Info',
                state: 2
            },
            resolve: {
                
            }
        })
        .state('social', {
            url: '/social',
            templateUrl: 'app/routes/UserSocial/UserSocial.html',
            controller: 'UserSocialController',
            controllerAs: 'ctrl',
            data: {
                pageTitle: 'Social Info',
                state: 3
            },
            resolve: {}
        })
        .state('pet', {
            url: '/pet',
            templateUrl: 'app/routes/UserPet/UserPet.html',
            controller: 'UserPetController',
            controllerAs: 'ctrl',
            data: {
                pageTitle: 'Pet Info',
                state: 4
            },
            resolve: {}
        })
        .state('summary', {
            url: '/summary',
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
