# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Project Setup

1. Install node v12.160.0 or greater
    - In terminal run "node -v" to verify install and version
    - In terminal run "npm -v" to verify install and version
2. Install AdonisJS
    - In terminal run "adonis". If a list of commands appears the install was successful
        * Trouble shooting step: Windows users may need to run "set-executionpolicy allsigned" in commandline. Mac may need to use sudo.
3. Install eslint
4. Install MAMP
    - In preferences, ports, ensure MySQL is set to 3306
5. Install MySql Workbench
    - In schemas, create an instayiff schema
    - In server, user and privileges, ensure a root account is present and has full administrative roles. Set a password for root
6. Clone the repo into an appropriate directory
    - Git branch as directed by operation manager
7. Change directory into the Instayiff folder. Path will be {directory}/Instayiff/Instayiff
8. Run npm install
9. Open folder in preferred text editor, VSC is suggested
10. Create a copy of the .env.example and rename it to .env
11. In .env, update the following: 
    - APP_KEY={Provided by operations manager} 
    - DB_CONNECTION=mysql
    - DB_USER=root
    - DB_PASSWORD={mysql root password created above}
    - HASH_DRIVER=argon
12. In a terminal run "adonis migration:run"
    - In mysql, verify the schema is now populated
        * Trouble shooting step: Verify matching schema name, user, password in mysql and .env
13. Open 2 command line / terminal tabs
    - Run "npm watch"
    - Run "adonis serve --dev"
        * Trouble shooting step: Verify on correct branch, run npm install
14. In the browser enter localhost:3333 in the address bar
15. Verification: From home page, create a test account. Check that user information has populated in the users table of the database.
16. Create and checkout branch for feature to be added, updated, or fixed.
    - Naming convention is feature/{feature being implemented}, ex: feature/readme
    - On feature completion, push into branch and create pull request. Operation manager will review code and merge into master.