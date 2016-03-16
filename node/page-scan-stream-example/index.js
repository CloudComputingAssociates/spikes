/**
 * Created by mtmazurik on 1/8/2015.
 *
 *  index.js  uses the CountStream class
 */
var CountStream = require('./countstream');
var countStream = new CountStream('SharePoint');
var http = require('http');

http.get('http://www.nwtstech.com', function(res) {
   res.pipe(countStream);
});

countStream.on('total', function(count) {
   console.log('Total matches:', count);
});
