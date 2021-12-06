const User = require("../models/Note.js");
module.exports = (request, response) => {
    User.deleteOne({_id: request.body.id},
        function(error) {
            response.json({
                errorCode: 0
            });
        }
    );
};
