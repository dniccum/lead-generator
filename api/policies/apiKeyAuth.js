/**
 * apiKeyAuth
 *
 * @module      :: Policy
 * @description :: Simple policy that tests if an api key is present. Provides extra protection for routes that don't have CSRF protection.
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

    // User is allowed, proceed to the next policy,
    // or if this is the last policy, the controller
    if (req.headers['auth-key'] && req.headers['auth-key'] === 'NhnuxnvyvJN7B86f') {
        return next();
    }

    // User is not allowed
    // (default res.forbidden() behavior can be overridden in `config/403.js`)
    sails.log.info('apiKeyAuth: Request did not have API Keys.');
    return res.forbidden('You are not permitted to perform this action.');
};
