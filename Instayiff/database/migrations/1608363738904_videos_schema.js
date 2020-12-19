'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class VideosSchema extends Schema {
    up () {
        this.create('videos', (table) => {
            table.increments();
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.string('link'); //link to where the video is
            table.timestamps();
        });
    }

    down () {
        this.drop('videos');
    }
}

module.exports = VideosSchema;

