/**
*
* @Name : CustomWindowsFormElectron/2-WithToolbar/main.js
* @Version : 1.0
* @Programmer : Max
- @Date : 2019-05-23
* @Released under : https://github.com/BaseMax/CustomWindowsFormElectron/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/CustomWindowsFormElectron
*
**/
const { app, BrowserWindow } = require('electron')

function initWindow () {
	let window = new BrowserWindow({
		width: 428,
		height: 200,
		frame: false,
		webPreferences: {
			nodeIntegration: true
		}
	})
	// window.setMenuBarVisibility(false)
	window.loadFile('index.html')
}

app.on('ready', initWindow)
