var chokidar = require('chokidar')
var path = require('path')
var fs = require('fs-extra')
var yaml = require('js-yaml')
var bb = require('bluebird')

var SCREENS = path.resolve(__dirname, '../screens')
var TARGET = path.resolve(__dirname, '../../ui/src/data-model.json')

chokidar.watch(SCREENS).on('all', async () => {
  var screen_basenames = await fs.readdir(SCREENS)
  var screen_filenames = screen_basenames.map(basename => path.resolve(SCREENS, basename))
  try {
    var screen_str_contents = await bb.map(screen_filenames, f => {
      return fs.readFile(f)
    })
  } catch (err) {
    console.warn('invalid yaml')
    console.warn(err)
  }
  var screens = screen_str_contents.map(str => yaml.safeLoad(str, 'utf8'))
  await fs.writeFile(TARGET, JSON.stringify({
    screens,
    flows: [
      { flow_a: {
        screens
      }}
    ]
  }, null, 2))
})
