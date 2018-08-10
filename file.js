const fs = require('fs')

const write = ({
  filepath,
  encoding = 'utf-8',
}) => {
  return (stream) => {
    const file = fs.createWriteStream(filepath, { encoding })

    file.on('finish', () => {
      console.info('Finished stream to file')
    })

    stream.pipe(file)
    
    return stream
  }
}

module.exports = {
  write
}
