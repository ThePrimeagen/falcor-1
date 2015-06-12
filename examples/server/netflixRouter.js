var Router = require('./router');
var titleService = require('./titleService');
var ratingService = require('./ratingService');
var genreListService = require('./genreListsService');
var Model = require('./../Falcor').Model;

function NetflixRouter(req, res) {
    this.req = req;
    this.res = res;
}

module.exports = NetflixRouter;

NetflixRouter.prototype = new Router([
    {
        route: 'genreLists[{ranges:genreListRanges}].name',
        get: function(aliasMap) {

            // here is what aliasMap might look like
            // {
            //     genreListRanges: {from: 0, to: 1}
            // }
            //
            // What we need to output
            // jsong: {
            //      genreLists: {
            //          0: { name: 'Recently Watched' },
            //          1: { name: 'New Releases' }
            //      }
            // }
            //
            // genreListService.get(RANGE, cookie) => promise
            // {
            //    rows: [
            //        {
            //           index: 0,
            //            name: ‘Recently Watched’
            //        },
            //        ... more genres ...
            //    ]
            // }
            var range = aliasMap.genreListRanges;
        }
    }
]);
