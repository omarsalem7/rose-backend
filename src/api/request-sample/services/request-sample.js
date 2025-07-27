'use strict';

/**
 * request-sample service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request-sample.request-sample');
