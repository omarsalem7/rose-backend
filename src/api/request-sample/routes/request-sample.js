'use strict';

/**
 * request-sample router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::request-sample.request-sample');
