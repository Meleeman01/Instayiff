'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Picture extends Model {
    user () {
        return this.belongsTo('App/Models/User');
    }
    album() {
        return this.belongsTo('App/Models/Album');
    }
}

module.exports = Picture;
