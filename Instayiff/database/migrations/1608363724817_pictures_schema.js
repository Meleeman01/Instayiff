'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PicturesSchema extends Schema {
    up () {
        this.create('pictures', (table) => {
            table.increments();
            table.integer('album_id').unsigned().references('id').inTable('albums');
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.string('link');
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    down () {
        this.drop('pictures');
    }
}

module.exports = PicturesSchema;
