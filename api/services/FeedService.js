/**
 * Service to store/handle various feeds
 *
 * @name FeedService
 * @type {Object}
 */
module.exports = {

    initialFeed: [],

    /**
     * Sets the feed
     *
     * @name setFeed
     * @param feed
     * @return void
     */
    setFeedData: function(feed) {
        sails.services.feedservice.initialFeed = feed;
    },

    /**
     * Returns all of the feed data
     *
     * @name getFeedDAta
     * @return {Object[]}
     */
    getFeedData: function() {
        return sails.services.feedservice.initialFeed;
    },

    /**
     * Queries the available feed data and returns the appropriate results
     * @param {string|string[]} type
     * @param {string|string[]} location
     * @return {Object[]|string}
     */
    queryFeedData: function(type, location) {
        _ = require('lodash');

        var queriedFeed = sails.services.feedservice.getFeedData();

        // if type has been provided
        if (type) {
            if (typeof type === 'string') {
                queriedFeed = _.filter(queriedFeed, function (object) {
                    return _.includes(object.types, type);
                });
            } else if (_.isArray(type)) {
                queriedFeed = _.filter(queriedFeed, function (object) {
                    var typeArray = object.types;
                    var intersection = _.intersection(typeArray, type);
                    if (intersection.length === type.length) {
                        return object;
                    }
                });
            }
        }

        // if location has been provided
        if (location) {
            if (typeof location === 'string') {
                queriedFeed = _.filter(queriedFeed, function (object) {
                    return _.includes(object.zips, location);
                });
            } else if (_.isArray(location)) {
                queriedFeed = _.filter(queriedFeed, function (object) {
                    var typeArray = object.zips;
                    var intersection = _.intersection(typeArray, location);
                    if (intersection.length === location.length) {
                        return object;
                    }
                });
            }
        }

        // order results
        queriedFeed = _.orderBy(queriedFeed, 'bid', 'desc');

        return queriedFeed;
    }
};