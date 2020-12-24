'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RepliesSchema extends Schema {
    up () {
        this.create('replies', (table) => {
            table.increments();
            table.integer('post_id').unsigned().references('id').inTable('posts');
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.string('tags');
            table.integer('replying_to').unsigned().references('id').inTable('users'); 
            table.integer('comment_id').unsigned().references('id').inTable('comments');
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    down () {
        this.drop('replies');
    }
}

module.exports = RepliesSchema;
