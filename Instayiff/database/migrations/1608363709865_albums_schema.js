'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AlbumsSchema extends Schema {
    up () {
        this.create('albums', (table) => {
            table.increments();
            table.string('content'); //i probably don't need this but we'll keep it here.
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.string('link'); //refers to where the uploaded content lives
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    down () {
        this.drop('albums');
    }
}

module.exports = AlbumsSchema;
