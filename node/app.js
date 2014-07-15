(function(fs, express, bodyParser){
    var app = express();
    var path = process.env.EMAIL_PATH || '~/mfo',
        port = process.env.PORT || 9090;
    app.use(bodyParser.json());
    app.post('/subscribe/', function(req, res) {
        if(req.body.email) {
            var filePath = path + '/email.txt';
            fs.appendFile(filePath, req.body.email + '\n', function (err) {
    	    if (err) {
                    console.log("Failed to save user and email: " + err);
                }
            });
	    res.send();
        } else {
            res.send();
	}
    });
    app.listen(port, function(){
        console.log('Express server listening on port %s in mode %s', port, process.env.NODE_ENV);
    });
})(require('fs'), require('express'), require('body-parser'));
