/**
*
* @Name : CustomWindowsFormElectron/2-WithToolbar/script.js
* @Version : 1.0
* @Programmer : Max
- @Date : 2019-05-23
* @Released under : https://github.com/BaseMax/CustomWindowsFormElectron/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/CustomWindowsFormElectron
*
**/
const remote = require('electron').remote;

let toolbarExit=document.getElementById("toolbar-exit");
let toolbarMin=document.getElementById("toolbar-min");
let toolbarMax=document.getElementById("toolbar-max");

toolbarExit.addEventListener("click", function() {
	var window = remote.getCurrentWindow();
	window.close();
});
toolbarMin.addEventListener("click", function() {
	var window = remote.getCurrentWindow();
	window.minimize();
});
toolbarMax.addEventListener("click", function() {
	var window = remote.getCurrentWindow();
	window.maximize();
});
