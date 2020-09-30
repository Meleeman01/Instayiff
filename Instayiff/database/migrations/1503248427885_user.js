'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
    up () {
        this.create('users', (table) => {
            table.increments();
            table.string('username', 80).notNullable().unique();
            table.string('email', 254).notNullable().unique();
            table.string('password', 255).notNullable();
            table.integer('wallet_id',254).unique().nullable();
            table.string('reset_token',255).unique().nullable();
            table.timestamp('reset_time').nullable();
            table.timestamps();
        });
    }

    down () {
        this.drop('users');
    }
}

module.exports = UserSchema;
