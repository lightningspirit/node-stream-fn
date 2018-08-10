const through2 = require('through2')

module.exports = (fn) => {
  return (stream) => {
    return stream.pipe(through2((chunk, _, cb) => {
      cb(null, fn(chunk))
    }))
  }
}
