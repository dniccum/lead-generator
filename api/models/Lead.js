/**
* Quiz.js
*
* @description :: This is the Lead model.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // model definitions
    type: {
      type: 'string',
      required: true
    },
    zipCode: {
      type: 'string',
      required: true,
      numeric: true,
      minLength: 5,
      maxLength: 5
    },
    firstName: {
      type: 'string',
      required: true,
      alpha: true
    },
    lastName: {
      type: 'string',
      required: true,
      alpha: true
    }
  },
  validationMessages: {
    type: {
      required: "Please indicate the type of lead this is."
    },
    zipCode: {
      required: "Please include a zip code for this lead.",
      numeric: 'Please enter a zip postal code.',
      minLength: 'The zip code that you have entered is not long enough.',
      maxLength: 'The zip code that you have entered is too long enough.'
    },
    firstName: {
      required: "Please include a first name for this lead.",
    },
    lastName: {
      required: "Please include a last name for this lead.",
    },
  }
};
