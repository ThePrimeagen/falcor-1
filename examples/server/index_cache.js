var falcor = require('./../falcor');
var Model = falcor.Model;
var dataSourceRoute = require('falcor-express').dataSourceRoute;


app.use('/member.json', dataSourceRoute(function(req, res) {
    return model;
}));
