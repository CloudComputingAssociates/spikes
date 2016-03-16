/**
 * Created by mtmazurik on 1/8/2015.
 *
 *  Example of a stream;  A Writeable stream that counts
 *
 *  Streams are cool, read through this code ...
 */
var Writable = require('stream').Writable;      // module load: NodeJS stream.Writable is an abstract class
var util = require('util');                     // module load: NodeJS util      ~ similare to imports in C#

module.exports = CountStream;                   // declare the 'namespace', says what this module exports by name 'CountStream'

util.inherits(CountStream, Writable);           // util.inherits means:  Countstream : Writeable (inherits from abstract Writeable)

function CountStream(matchText, options) {      // ctor
    Writable.call(this, options);
    this.count = 0;
    this.matcher = new RegExp(matchText, 'ig');
}
                                                // has to do with inheritence chain, ie; is _write inherited or inheritable?

                                                // so here, we have defined a _write function for the prototype,
                                                //      which is similar to a shared  member fctn for a class
                                                // Javascript has objects (no classes) and is 'prototypical' so this is
                                                //      just how you get defined members for objects that will
                                                //      created with the 'new' keyword
CountStream.prototype._write = function(chunk, encoding, cb) {    // why is the inherited Writeable method 'underscore' _write?
    var matches = chunk.toString().match(this.matcher);           // ans: see NodeJS documentation method to implement: _write
    if(matches) {
        this.count += matches.length;
    }
    cb();
};
                                                // here we are defining the 'end' function for the prototype of CountStream
CountStream.prototype.end = function() {
    this.emit('total', this.count);
}