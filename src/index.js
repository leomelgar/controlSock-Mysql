//heredo el createWindow de main
const {CreateWindow} = require('./main');
const {app} = require('electron');
require('./database');
require('electron-reload')(__dirname);

app.allowRendererProcessReuse = true;
app.whenReady().then(CreateWindow);