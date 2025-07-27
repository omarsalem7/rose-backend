'use strict';

/**
 * local-export router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::local-export.local-export');
