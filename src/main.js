//importar la clase BrowserWindow de electron
//dar soporte para el browser con nodejs
const {BrowserWindow} = require('electron');
let window
function createWindow() {
    window = new BrowserWindow({
        width:800,
        heigth: 600,
        webPreferences:{
            nodeIntegration: true
        }
    })
}