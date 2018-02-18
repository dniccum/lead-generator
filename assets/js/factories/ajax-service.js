/**
 * @name AJAX service
 */
leadGenerator.factory('AJAXService', ['$http', '$q', function($http, $q) {
    var service = {};

    /**
     * Submit a new lead to the API for adding to the database
     *
     * @name submitLead
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} insuranceType
     * @param {string} zipCode
     */
    service.submitLead = function(firstName, lastName, insuranceType, zipCode) {
        return $q(function(resolve, reject) {
            $http({
                method: 'POST',
                url: '/ajax/lead',
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    type: insuranceType,
                    zipCode: zipCode
                }
            }).then(function(successfulResponse) {
                return resolve(successfulResponse);
        }, function (errorResponse) {
                return reject(errorResponse);
            });
        });
    };

    return service;

}]);