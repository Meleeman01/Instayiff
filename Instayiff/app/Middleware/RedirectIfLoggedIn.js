'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class RedirectIfLoggedIn {
    /**
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Function} next
     */
    async handle ({auth, request,response }, next) {
        // call next to advance the request
        try {
            if(await auth.check()) {
                response.redirect('/feed');
            }
        } catch (error) {
            //this is the only thing preventing this from blowing up.
            //try catch is truly magical
        }
        await next();
    }

    /**
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Function} next
     */
    async wsHandle ({ request }, next) {
        // call next to advance the request
        await next();
    }
}

module.exports = RedirectIfLoggedIn;
