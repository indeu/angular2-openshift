//  OpenShift sample Node application
var restify = require('restify'),
    fs      = require('fs');
	
var app = restify.createServer();
app.use(restify.queryParser());
app.use(restify.CORS());
app.use(restify.fullResponse());


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';



app.listen(port, ip, function () {
	console.log('Server running on http://%s:%s', ip, port);
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});