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
    }
};