'use strict'

const { Command } = require('@adonisjs/ace')
const Database = use('Database')

class IncrementPostcount extends Command {
  static get signature () {
    return 'increment:postcount'
  }

  static get description () {
    return 'WIP: Scheduler to increase post_left by 3 every 24 hours'
  }

  async incrementPosts(){
    /*Could define an upper post limit here
    *Assuming using a sql statement will be faster than pulling all user_data and iterating over each object to update the post_count
    */
    await Database.raw('update user_data set post_count = post_count + 3');
    Database.close();
  }

  async handle (args, options) {

    this.info('increment:postcount command start')

    var cron = require('node-cron');
    //Will trigger at midnight
    cron.schedule('0 0 * * *', () => {
      this.incrementPosts();
      console.log('Increment interval triggered');
    });
  }
}

module.exports = IncrementPostcount