'use strict';
const User = use('App/Models/User');
const Post = use('App/Models/Post');
const Video = use('App/Models/Video');
const Tag = use('App/Models/Tag');
const Picture = use('App/Models/Picture');
const Helpers = use('Helpers');

const { sanitizor } = use('Validator');

class PostController {
    async create({auth, request, view, response}) {
        //validate our files here since validator won't work on multiple files on the routes.js
        const validationOptions = {
            types: ['image','video'],
            size: '10mb',
            extnames: ['png','jpeg','jpg','gif','mp4','ogg']
        };
        let user = await auth.getUser();
        //console.log(user);
        let postData = request.all();
        console.log(postData);
        let pics = request.file('files',validationOptions);

        

        await pics.moveAll(Helpers.publicPath('uploads'), (file) => {
            return {
                name: `${new Date().getTime()}.${file.subtype}`
            };
        });
        
        if (!pics.movedAll()) {
            console.log('error detected probs validation');
            return pics.errors();
        }
        else {
            //console.log(pics);
            if (pics._files.length > 1) {
                console.log('deal with an album here');
            }
            else {
                for (const pic of pics._files) {
                    console.log(pics._files);

                    //location+filename for teh link part of Picture, and then the user id as well minimum
                    if (pic.type == 'image') {
                        console.log('this is an image');
                        await this.createImage(user,pic,postData.tags);
                    }
                    else if (pic.type == 'video') {
                        console.log('this is a video');
                    }
                }
            

            }


            //console.log(postData);
            return response.status(200).send({'message':'uploads successful'});
        }

        
        

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
        //delete a users' post. the user must be an admin, or a user who owns the post.
    }

    async createImage(user,pic,tags) {
        await Picture.create({
            user_id:user.id,
            link:'/uploads/'+pic.fileName,
        });

        this.createTags(tags);
    }
    async createTags(tags) {
        //parse user tag data. be careful.
        sanitizor.stripTags(sanitizor.escape(tags));
        
        //first seperate the tags by " " mark. perhaps sanitizing would be better.
        tags.split(" ");
        //check to see if tag exists in db
        for (const tag of tags) {
            console.log(tag);
            if (tag) {
                
            }
            else
        }
    }
    async createPost(postData) {

    }

}

module.exports = PostController;


