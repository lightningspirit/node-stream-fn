const map = require('./map')

const parse = (stream) => {
  return map((chunk) => {
    return JSON.parse(chunk)
  })(stream)
}

const stringify = (stream) => {
  return map((chunk) => {
    return JSON.stringify(chunk)
  })(stream)
}

module.exports = {
  parse, stringify
}
