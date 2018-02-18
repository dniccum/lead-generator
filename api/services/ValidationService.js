/**
 * Service to validate incoming content
 *
 * @name ValidationService
 * @type {Object}
 */
module.exports = {

    /**
     * @name isValidZipCode
     * @param {string} zipCode
     * @return boolean
     */
    isValidZipCode: function(zipCode) {
        return /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipCode);
    },

    /**
     * @name isValidType
     * @param {string} type
     * @return boolean
     */
    isValidType: function(type) {
        return _.includes(["home", "health", "auto", "life"], type);
    },

    /**
     * @name validateZipCodeArray
     * @param {string[]} zipCodeArray
     * @return {boolean}
     */
    validateZipCodeArray: function(zipCodeArray) {
        var valid = true;

        if (!_.isArray(zipCodeArray)) {
            return false;
        }

        for(var i = 0; i < zipCodeArray.length; i++) {
            if (!sails.services.validationservice.isValidZipCode(zipCodeArray[i])) {
                valid = false;
            }
        }

        return valid;
    },

    /**
     * @name validateTypeArray
     * @param {string[]} typeArray
     * @return {boolean}
     */
    validateTypeArray: function(typeArray) {
        var valid = true;

        if (!_.isArray(typeArray)) {
            return false;
        }

        for(var i = 0; i < typeArray.length; i++) {
            if (!sails.services.validationservice.isValidType(typeArray[i])) {
                valid = false;
            }
        }

        return valid;
    },

    /**
     * @name validateRequestParameters
     * @param {string|string[]} typeParams
     * @param {string|string[]} locationParams
     * @return {Object}
     */
    validateRequestParameters: function(typeParams, locationParams) {
        if (typeof typeParams === 'string') {
            if (!sails.services.validationservice.isValidType(typeParams)) {
                return {
                    valid: false,
                    message: 'The type you provided is not valid'
                };
            }
        } else if (_.isArray(typeParams)) {
            if (!sails.services.validationservice.validateTypeArray(typeParams)) {
                return {
                    valid: false,
                    message: 'The type you provided is not valid'
                };
            }
        }

        if (typeof locationParams === 'string') {
            if (!sails.services.validationservice.isValidZipCode(locationParams)) {
                return {
                    valid: false,
                    message: 'The zip code you provided is not valid'
                };
            }
        } else if (_.isArray(locationParams)) {
            if (!sails.services.validationservice.validateZipCodeArray(locationParams)) {
                return {
                    valid: false,
                    message: 'The zip codes you provided is not valid'
                };
            }
        }

        return {
            valid: true
        };
    }
};