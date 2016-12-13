var path = require('path')
// Keep a global reference of the
var appRoot = path.join(__dirname, '..');

// you were going to `require` the file from here.
require('electron-compile').init(appRoot, './index');
