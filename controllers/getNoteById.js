const Note = require('../models/Note.js')
module.exports = (request, response) => {
    // console.log(request.query.id);
    Note.findById(
        request.query.id
    , function(error, note) {
        // console.log(error, note);
        response.json(note);
    })
}