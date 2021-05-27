/*!
 * Minify by http://www.MinifyWeb.com/
 */
function copy(button,preID){let allButtons=document.getElementsByClassName("copy");for(let i=0;i<allButtons.length;i++){reset(allButtons[i]);}
var range=document.createRange();range.selectNode(document.getElementById(preID));window.getSelection().removeAllRanges();window.getSelection().addRange(range);document.execCommand("copy");window.getSelection().removeAllRanges();button.innerText="copied";button.style.color='orange';button.style.border.color='orange';setTimeout(function(){reset(button)},4000);}
function reset(button){button.blur();button.style.color='#DDD';button.style.border.color='#DDD';button.innerText="copy";}
function connect(portionID){let portion=document.getElementById(portionID);portion.style.setProperty('background','#FFF6');}
function disconnect(portionID){let portion=document.getElementById(portionID);portion.style.setProperty('background','inherit');}