'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ContactsSchema extends Schema {
    up () {
        this.create('contacts', (table) => {
            table.increments();
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.integer('friend_id').unsigned().references('id').inTable('users');
            table.integer('close_friend_id').unsigned().references('id').inTable('users');
            table.integer('follower_id').unsigned().references('id').inTable('users');
            table.timestamps();
        });
    }

    down () {
        this.drop('contacts');
    }
}

module.exports = ContactsSchema;
