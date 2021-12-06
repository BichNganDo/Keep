const Note = require('../models/Note.js')
module.exports = (request, response) => {
    // console.log(request.body.query);

    let querySearch = request.body.query  || "";

    Note.find({
        // idUser: request.session.userId
        $and: [ 
            { 
                idUser: request.session.userId 
            }, 
            {  
                $or: [
                    {title: {$regex: querySearch, $options : 'i'}}, 
                    {body: {$regex: querySearch, $options : 'i'}}
                ] 
            } 
        ]
      
    }, function (error, notes) {
        response.render('index', {
            notestore: notes || [],
            valueSearch : querySearch
        })
    })
}