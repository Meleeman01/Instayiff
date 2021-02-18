'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CloseFriendsSchema extends Schema {
    up () {
        this.create('close_friends', (table) => {
            table.increments();
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.integer('friend_id').unsigned().references('id').inTable('users');
            table.timestamps();
        });
    }

    down () {
        this.drop('close_friends');
    }
}

module.exports = CloseFriendsSchema;
