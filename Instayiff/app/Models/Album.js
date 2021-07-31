'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Album extends Model {
    //i'm a retard and decided lol lets make a json string. i've yet to see the folly of my ways so i'm going to do it
    //anyway. we can probably use a hook or something to automagically format strings into json data from user input.
    //future me can go suck a dick.
    user() {
        return this.belongsTo('App/Models/User');
    }

}

module.exports = Album;
