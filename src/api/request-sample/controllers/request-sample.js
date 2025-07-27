'use strict';

/**
 * request-sample controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::request-sample.request-sample');
