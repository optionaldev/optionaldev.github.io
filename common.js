/*!
 * Minify by http://www.MinifyWeb.com/
 */
var keyupCalled=false;var state=false;function clicky(input){console.log("clicky");if(keyupCalled==false){toggleMode()
input.blur();}else{keyupCalled=false;}}
function keyup(){console.log("keyup");keyupCalled=true;if(event.code=='Space'){switchDisplayMode()}}
function toggleMode(){console.log("toggle mode");document.documentElement.classList.toggle('lightmode');var colortheme=window.localStorage.getItem("colortheme");console.log(`colortheme before=${colortheme}`);if(colortheme=="light"){colortheme="dark";}else{colortheme="light";}
console.log(`colortheme after=${colortheme}`);window.localStorage.setItem("colortheme",colortheme);}
function checkifneeded(){console.log("onload checkifneeded");if(window.localStorage.getItem("colortheme")=="light"){console.log("onload checkbox true");document.getElementById("colortheme").checked=true;setTimeout(function(){document.getElementById("colortheme").checked=true;},100);}else{document.getElementById("colortheme").checked=false;setTimeout(function(){document.getElementById("colortheme").checked=false;},100);}
setTimeout(function(){document.documentElement.style.setProperty('--animation','0.5s');document.documentElement.style.setProperty('--transition','0.5s');},200);}
function applyTheme(){console.log("apply theme");var colortheme=window.localStorage.getItem('colortheme');if(colortheme=="light"){document.documentElement.classList.toggle('lightmode');}else{if(colortheme!="dark"){colortheme="dark";window.localStorage.setItem("colortheme","dark");}}}
window.onload=function(){console.log("window.onload");}
window.onunload=function(){console.log("window.onunload");}