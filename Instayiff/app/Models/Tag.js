'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Tag extends Model {
    posts() {
        return this.hasMany('App/Models/Post');
    }
    comments() {
        return this.hasMany('App/Models/Comment');
    }
    replies() {
        return this.hasMany('App/Models/Reply');
    }
}

module.exports = Tag;
