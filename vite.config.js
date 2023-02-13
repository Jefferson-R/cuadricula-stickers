import path from 'path'

module.exports = {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    target: 'es6'
  }
}