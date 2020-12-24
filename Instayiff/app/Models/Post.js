'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Post extends Model {
    user(){
        return this.belongsTo('App/Models/User');
    }
    picture() {
        return this.hasOne('App/Models/Picture');
    }
    album() {
        return this.hasOne('App/Models/Album');
    }
    video() {
        return this.hasOne('App/Models/Video');
    }
    tags() {
        return this.belongsTo('App/Models/Tag');
    }
    comments() {
        return this.hasMany('App/Models/Comment');
    }
}

module.exports = Post;
