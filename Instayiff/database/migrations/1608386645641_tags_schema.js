'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TagsSchema extends Schema {
    up () {
        this.create('tags', (table) => {
            table.increments();
            table.string('tagname');
            table.integer('post_id').unsigned().references('id').inTable('posts');
            table.integer('comment_id').unsigned().references('id').inTable('posts');
            table.integer('reply_id').unsigned().references('id').inTable('posts');
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    down () {
        this.drop('tags');
    }
}

module.exports = TagsSchema;
