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
    await Database.raw('update user_data set post_count = post_count + 3')
  }
  
  async handle (args, options) {
    this.info('Dummy implementation for increment:postcount command')
    var cron = require('node-cron');

    
    cron.schedule('*/5 * * * * *', () => {
      this.incrementPosts();
      console.log('running a task every 5 seconds');
    });
  }
}

module.exports = IncrementPostcount