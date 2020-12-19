'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PostsSchema extends Schema {
    up () {
        this.create('posts', (table) => {
            table.increments();
            table.integer('tag_id').unsigned().references('id').inTable('tags').nullable(); //this might need to be nullable
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.integer('album_id').unsigned().references('id').inTable('albums');
            table.integer('picture_id').unsigned().references('id').inTable('pictures');
            table.integer('video_id').unsigned().references('id').inTable('videos');
            table.string('caption').nullable();
            table.integer('likes').nullable();
            table.integer('paw_count').nullable();
            table.boolean('is_tipable').defaultTo(false);
            table.timestamps();
        });
    }

    down () {
        this.drop('posts');
    }
}

module.exports = PostsSchema;
