'use strict';
const User = use('App/Models/User');
const Mail = use('Mail');
const Hash = use('Hash');
const Env = use('Env');

class SessionController {

    async logout ({ auth, response}) {
        /**
         * Logout the user.
         *
         * ref: http://adonisjs.com/docs/4.1/authentication#_logout
         */
        await auth.logout();

        return response.redirect('/');
    }

    async forgot({auth, request, view}) {
        return view.render('forgot');
    }

    //send an email to a user for their recovery link
    async emailReset({auth,request,response,session}) {
        const data = request.only(['email']);
        let user = await User.findBy('email', data.email);
        //create a date to create a hash and save the time the password was reset
        let date = new Date();
        user.reset_token = await Hash.make(date+user.username);
        user.reset_time = date;
        //save the user
        await user.save();
        //create a link for the user with the hashed token
        if (Env.get('NODE_ENV')=='development') {
            user.link = 'http://localhost:'+Env.get('PORT')+'/password_reset?token='+user.reset_token;
        }
        else {
            //this will hopefully be the domain plz plz plz
            user.link = 'https://instayiff.com/password_reset?token='+user.reset_token;
        }

        //send an email to the designated email address. with a hash and some instructions. at least i think thats how it works..
        await Mail.send('emails.accountRecovery', user.toJSON(), (message) => {
            message
                .to('meleeman01@live.com')
                .from('Instayiff01@gmail.com')
                .subject('Instayiff: Password Reset Instructions;');
        });

        session.flash({ info: 'email sent. Check your inbox for password reset instructions.'});
        return response.redirect('/forgot');
    }

    //checks the hash with the user table and returns the password change view
    async resetPassword({request,response,view}) {
        const data = request;
        let token = data.request._parsedUrl.query;
        //remove token= so we can use the token to compare with the database
        token = token.replace('token=','');

        //check to see if a hash exists, and compare that hash with the one saved in the users db
        const user = await User.findBy('reset_token', token);
        if (user) {
            //if the hash matches the one found in the db, then return the change password view with the user found by the hash token
            request.user = user;
            return view.render('passwordreset');
        }
        else {
            //else if it doesn't match, then throw a token missmatch error. 
            return response.unauthorized('Token expired or doesn\'t match.');
        }
    }
    //store the new password for the user
    async resetPasswordStore({request,response}) {
        const data = request.only(['reset_token','password']);
        //update users password by the user's username which is the expected 
        let user = await User.findBy('reset_token', data.reset_token );
        if (user) {
            //update user password and clear the reset token
            user.password = data.password;
            user.reset_token = null;
            await user.save();
            return response.redirect('/');
        }
        else {
            return response.unauthorized('Token expired or doesn\'t match.');
        }
    }
}


module.exports = SessionController;
