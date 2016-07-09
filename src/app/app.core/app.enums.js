export default angular.module('AppEnums', [])
    .service('EnumsSvc', ($rootScope, $http) => {
        'ngInject';
        var baseUrl = '/assets/data';
        return {
            getCountries: (success, error) => {
                $http.get(`${baseUrl}/countries.json`).then(success, error);
            },

            getCities: (success, error) => {
                $http.get(`${baseUrl}/cities.json`).then(success, error);
            }
        }
    })
