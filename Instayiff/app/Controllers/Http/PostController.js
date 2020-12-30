'use strict';
const User = use('App/Models/User');
const Post = use('App/Models/Post');
const Video = use('App/Models/Video');
const Tag = use('App/Models/Tag');
const Picture = use('App/Models/Picture');


class PostController {
    async create({auth, request, view}) {
        //request.only();
        //create a new post

        //request needs tags, user_id, album_id, picture_id, video_id, caption, likes, paw count, is_tippable

        //first process teh tags and make sure the tags are separated by spaces. 

        //after processing the 

    }
    async update() {
        //update a users' post.
    }
    async delete() {
        //delete a users' post.
    }

}

module.exports = PostController;
