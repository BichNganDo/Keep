const Note = require('../models/Note.js')
module.exports = (request, response) => {
    Note.find({
        idUser: request.session.userId,
    }, function (error, notes) {
        response.render('index', {
            notestore: notes
            
        })
    })
}