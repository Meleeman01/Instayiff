'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CommentsSchema extends Schema {
    up () {
        this.create('comments', (table) => {
            table.increments();
            table.integer('tag_id').unsigned().references('id').inTable('tags');
            table.integer('post_id').unsigned().references('id').inTable('posts');
            table.string('text').nullable();
            table.timestamps();
            table.timestamp('deleted_at'); //have to update this manually in the controller unless...
        });
    }

    down () {
        this.drop('comments');
    }
}

module.exports = CommentsSchema;
