const Note = require('../models/Note.js')
module.exports = (request, response) => {
    Note.updateOne( 
        {_id: request.body.id},
        {$set: {
            _id: request.body.id,
            title: request.body.title, 
            body: request.body.body, 
            image: request.body.image
        }}
        , function(error) {
            console.log("error", error);
            response.json({
                errorCode: 0
            });
        }
    )
};