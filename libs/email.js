'use strict'
var db = require('./db').db,
    mongoose = require('./db').mongoose,
    Schema = mongoose.Schema

var emailSchema = new Schema(
    { phoneToken: String
    , email: String
    , firstName: String
    , lastName: String
    }  
)

var email = db.model
( 'email'
, emailSchema
, 'email'
)

var Email = {}

Email.subscribe = function(req, res) {
   var user = new email(req.body)
    user.save(function(err, user){
        if(err) {
            var errMsg = 
            { status: 500
            , msg: 'Failure adding email. Please try again'
            }
            req.send(errMsg)
        } else {
            var successMsg =
            { status: 200
            , msg: 'Email Added'
            }
            req.send(successMsg)
        }
    })
}


module.exports = Email
