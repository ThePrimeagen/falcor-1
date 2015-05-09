var falcor = require('./../falcor');
var Model = falcor.Model;
var middleware = require('falcor-server').expressMiddleware;


app.use('/member.json', middleware(function(req, res) {
    return model;
}));
