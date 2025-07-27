'use strict';

/**
 * local-export service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::local-export.local-export');
