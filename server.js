let express = require('express');
let app = express();

app.use(express.static('public'));

app.use("/", function(req, res) {
  let ip_address = req.headers['x-forwarded-for'];
  ip_address = ip_address.slice(0, ip_address.indexOf(','));
  let language = req.headers['accept-language'];
  language = language.slice(0, language.indexOf(','));
  let software = req.headers['user-agent'];
  software = software.slice(software.indexOf('(') + 1, software.indexOf(')'));
  res.json( {ip_address, language, software} );
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
