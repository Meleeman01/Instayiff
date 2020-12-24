'use strict';

class FeedController {
    show ({auth, request, view}) {
        
        return view.render('feed');
    }

    showMore({request}){
        // a button will make a request to this api endpoint laterrrrrr
    }
}

module.exports = FeedController;
