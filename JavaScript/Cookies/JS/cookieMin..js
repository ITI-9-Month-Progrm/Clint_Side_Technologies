function setCookie(o,e,t){if(t){var i=new Date;i.setMonth(i.getMonth+t),document.cookie=o+"="+e+";expires="+i.toUTCString()}else document.cookie=o+"="+e}
function allCookieList(){var o,e,t=[],i=document.cookie.split(";");for(o=i.length,e=0;e<o;e++)t[i[e].split("=")[0].trim()]=i[e].split("=")[1];return t}
function getCookie(o){return allCookieList()[o]}
function deleteCookie(o){var e=new Date;e.setMonth(e.getMonth-12),document.cookie=o+"=;expires="+e.toUTCString()}
function hasCookie(o){var e,t;for(o in e=allCookieList())t=e[o]?1:0;return t}