/**
 * @file
 * initial migration file
 *
 * @author David Ferguson <davidferguson@dialexa.com>
 * @copyright Dialexa 2018
 * 03/02/2018
 */
'use strict';

exports.up = function (knex) {
  return knex.schema.createTable('vehicles', (table) => {
    table.string('make', 50);
    table.string('model', 50);
    table.integer('year');
    table.string('vin', 17).primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('vehicles');
};
