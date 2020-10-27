'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', 'UserController.loginPage').middleware('guest');

Route.on('/about').render('Misc.about'); //about page
Route.on('/privacy').render('Misc.privacy'); //privacy page

Route
    .get('/login', 'UserController.loginPage')
    .middleware('guest');

Route
    .get('users/:id', 'UserController.show')
    .middleware('auth');

//for logging in 
Route.post('signin', 'UserController.login').validator('login');
Route.get('feed','FeedController.show').middleware('auth');
    
Route
    .post('register', 'UserController.register')
    .middleware('guest')
    .validator('register');

Route.get('logout', 'SessionController.logout');

//display forgot modal to send an account renewal link
Route.get('forgot','SessionController.forgot'); //might need to refactor the session and USER controller..
Route
    .post('recover', 'SessionController.emailReset')
    .validator('passwordReset');

//change password after a user is verified their token
Route
    .get('password_reset', 'SessionController.resetPassword');

Route
    .post('password_store','SessionController.resetPasswordStore')
    .validator('password');