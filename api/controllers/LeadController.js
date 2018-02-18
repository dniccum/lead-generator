/**
 * LeadController
 *
 * @description :: Server-side logic for managing leads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: function(req, res) {
	    var insuranceTypes = [
            {'key' :'home', 'value': 'Home'},
            {'key' :'health', 'value': 'Health'},
            {'key' :'auto', 'value': 'Auto'},
            {'key' :'life', 'value': 'Life'}
        ];

	    return res.view('homepage', {
            insuranceTypes: insuranceTypes,
            locals: {
                pageMeta: {
                    title: 'Let\'s get your information!'
                }
            }
        });
    },

    createLead: function(req, res) {
        if (!req.wantsJSON) {
            return res.forbidden();
        }

        if (!ValidationService.isValidZipCode(req.param('zipCode'))) {
            return res.badRequest('This zip code is not valid.');
        }

        Lead.create({
            firstName: req.param('firstName'),
            lastName: req.param('lastName'),
            type: req.param('type'),
            zipCode: req.param('zipCode')
        }, function(error, newLead) {
            if (error && error.Errors) {
                var parsedErrors = ErrorService.ParseUserErrors(error.Errors);
                return res.badRequest({error : parsedErrors});
            }

            return res.ok({
                message: 'A new lead has been created',
                lead: newLead
            });
        });
    }
};

