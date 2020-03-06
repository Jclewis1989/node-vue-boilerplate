const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

// EJS templaing engine
app.set('view engine', 'ejs');

// Correct Formatting for EJS V 3.0.1 below //

/*

<%- include ('../partials/header') %>

*/

// End Correct Formatting for EJS V 3.0.1 //

// Declare routes
let ROUTE_CLIENT = require('./server/routes/clients');
let ROUTE_ADMIN = require('./server/routes/admins');
let ROUTE_VUE = require('./server/routes/vue');

// Use declared route(s)
app.use(ROUTE_CLIENT);
app.use(ROUTE_ADMIN);
app.use(ROUTE_VUE);

// /client/src/ is to render server side view folder correctly
app.use(express.static(path.join(__dirname + '/client/src/')));

// /server/html/ is to render vue app correctly
// Order is important otherwise app inherites / redirect
app.use(express.static(__dirname + '/server/public/'));
app.get(/.*/), (req, res) => res.sendFile(__dirname + './server/public/index.html');

// Error pages and renders
// These status codes will generate the respective ejs pages for a better user experience
app.use(function(req, res, next){
  if(res.status(404)) {
     return  res.render('../server/views/server_error_codes/bad-request');
  }

  if(res.status(403)) {
      return res.render('../server/views/server_error_codes/forbidden');
  }

  if(res.status(500)) {
      return res.render('../server/views/server_error_codes/internal');
  }

  if(res.status(408)) {
      return res.render('../server/views/server_error_codes/not-found');
  }

  if(res.status(400)) {
      return res.render('../server/views/server_error_codes/timeout');
  }
})

// Listen on port
app.listen(port || process.env.port, function() {
    console.log("Listening on port " + port);
})