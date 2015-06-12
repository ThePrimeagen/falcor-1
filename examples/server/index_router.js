var NetflixRouter = require('./netflixRouter');

app.use('/member.json', dataSourceRoute(function(req, res) {
    return new Model({
        //cache: cache, No more cache!
        source: new NetflixRouter(req, res)
    });
}));
