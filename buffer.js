const through2 = require('through2')

module.exports = (stream) => {
  return stream.pipe(through2((chunk, encode, cb) => {
    cb(null, new Buffer(chunk, encode))
  }))
}
