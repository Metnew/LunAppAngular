export default angular.module('AppEnums', [])
    .service('EnumsSvc', ($rootScope, $http, $location) => {
        'ngInject';
        var baseUrl = '/assets/data';
        if ($location.host().match('github.io')) {
            baseUrl = '/LunAppAngular' + baseUrl;
        }
        return {
            getCountries: (success, error) => {
                $http.get(`${baseUrl}/countries.json`).then(success, error);
            },

            getCities: (success, error) => {
                $http.get(`${baseUrl}/cities.json`).then(success, error);
            }
        }
    })
