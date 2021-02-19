'use strict'

const { Command } = require('@adonisjs/ace')
const Database = use('Database')
const cron = require('node-cron')

class IncrementPostcount extends Command {
  static get signature () {
    return 'increment:postcount'
  }

  static get description () {
    return 'WIP: Scheduler to increase post_left by 3 every 24 hours'
  }

  async incrementPosts(){
    //Could define an upper post limit here, insert .where('post_count', '<', '30') before .increment
    await Database.table('user_data').increment('post_count', 3);
    Database.close();
  }

  async handle (args, options) {

    this.info('increment:postcount command start')

    // Test version, triggers every 5 seconds.
    // cron.schedule('*/5 * * * * *', () => {
    //   this.incrementPosts();
    //   console.log('Increment interval triggered');
    // });

    // Will trigger at midnight
    cron.schedule('0 0 * * *', () => {
      this.incrementPosts();
      console.log('Increment interval triggered');
    });
  }
}

module.exports = IncrementPostcount