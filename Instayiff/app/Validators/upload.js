'use strict';

class upload {
    get rules () {
        return {
            // validation rules
            caption: 'string',
            tipable: 'string',
            tags: 'string'
        };
    }
}

module.exports = upload;
