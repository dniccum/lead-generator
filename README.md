# Lead Generator

This is a basic [Sails](http://sailsjs.org) (NodeJS) application that keeps track of insurance leads, and programmatically shows advertisers based on bid amount and other parameters.

## Requirements

* NodeJS version 6.*
* SQLite

## Setup

1. Clone the repository
2. Install the application dependencies using NPM (`npm install`) or Yarn (`yarn`)
3. Start the application using `node app.js`
4. Assuming you hae SQLite installed, the database will be created and migrated automatically

## Advertiser web service

The advertiser web service is protected by *very basic* authentication token that must be included in a custom HTTP header: `auth-key`. To do so set this header with the following key:

`auth-key` : `NhnuxnvyvJN7B86f`

### Routes

The following routes are available for this web service:

#### GET /api/advertisers

Example:

`/api/advertisers?type=home&type=health&location=64108`

Available parameters:

* type
    * enumeration ["home", "health", "auto", "life"]
    * Can be a single string or an array
* location
    * a valid zip code
    * Can be a single string or an array