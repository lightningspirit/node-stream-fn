const through2 = require('through2')

module.exports = (fn) => {
  return (stream) => {
    return stream.pipe(through2((chunk, encode, cb) => {
      if (fn(chunk)) {
        cb(null, new Buffer(chunk, encode))
      } else {
        cb()
      }
    }))
  }
}
