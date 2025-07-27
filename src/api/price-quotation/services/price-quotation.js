'use strict';

/**
 * price-quotation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::price-quotation.price-quotation');
