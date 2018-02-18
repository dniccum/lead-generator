/**
 * AdvertisersController
 *
 * @description :: Server-side logic for managing Advertisers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getAdvertisers: function(req, res) {
        var type = req.param('type'),
            location = req.param('location');

        if (!type && !location) {
            return res.badRequest('Please include parameters for your request');
        }

        var results = FeedService.queryFeedData(type, location);

        return res.ok({
            message: 'Results successfully returned',
            results: results
        });

    }

};

