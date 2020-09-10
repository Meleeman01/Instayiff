'use strict';

class FeedController {
    show ({auth, request, view}) {
        
        return view.render('feed');
    }
}

module.exports = FeedController;
