/**
 * jsonOnly
 *
 * @module      :: Policy
 * @description :: Simple policy that tests if the request wants JSON or not.
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

    if (req.wantsJSON) {
        sails.log.debug('jsonOnly: Wants json');
        return next();
    }

    return res.forbidden('This request can only be returned as JSON');
};
