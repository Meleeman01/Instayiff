'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserDataSchema extends Schema {
    up () {
        this.create('user_data', (table) => {
            table.increments();
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.string('bio',255).nullable();
            table.string('species',255).nullable();
            table.string('Age',255).nullable();
            table.string('fav_music',255).nullable();
            table.string('fav_quote',255).nullable();
            table.integer('wallet_id').nullable();
            table.string('favorites').nullable();
            table.integer('posts_left').notNullable().default(3); //Should have an upper limit, default of 3 is placeholder.
            table.timestamps();
        });
    }

    down () {
        this.drop('user_data');
    }
}

module.exports = UserDataSchema;
