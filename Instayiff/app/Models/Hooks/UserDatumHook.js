'use strict'

const UserDatum = require("../UserDatum");

const UserDatumHook = exports = module.exports = {}

//Hook to set new userdata posts_left to 3
UserDatumHook.initPosts = async (user) => {
    const userData = new UserDatum();
    userData.posts_left = 3;
    await user.data().save(userData);
}