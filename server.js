const express = require('express');
const app = express();
const expressip = require('express-ip');
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(expressip().getIpInfoMiddleware);

app.set('PORT', PORT);

app.get('/', function(req, res) {
  const ipInfo = req.ipInfo;

  //   const userIP =
  //     (req.headers && req.headers['x-forwarded-for']) ||
  //     req.ip ||
  //     req._remoteAddress ||
  //     (req.connection && req.connection.remoteAddress);

  var message = `Hey, you are browsing from ${ipInfo.city}, ${ipInfo.country}`;
  //var message = `Hey, you are browsing from ${userIP}`;

  res.send(message);
});

app.listen(app.get('PORT'), function() {
  console.log(
    'Express started on http://localhost:' +
      app.get('PORT') +
      '; press Ctrl-C to terminate.'
  );
});
