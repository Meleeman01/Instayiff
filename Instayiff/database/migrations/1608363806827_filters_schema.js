'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class FiltersSchema extends Schema {
    up () {
        this.create('filters', (table) => {
            table.increments();
            table.string('filtername');
            table.timestamps();
        });
    }

    down () {
        this.drop('filters');
    }
}

module.exports = FiltersSchema;
