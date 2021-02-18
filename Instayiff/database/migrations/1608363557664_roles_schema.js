'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RolesSchema extends Schema {
    up () {
        this.create('roles', (table) => {
            table.increments();
            table.string('roles').nullable(); //define roles in rows and they'll have an id that gets referenced here.
            table.timestamps();
        });
    }

    down () {
        this.drop('roles');
    }
}

module.exports = RolesSchema;
