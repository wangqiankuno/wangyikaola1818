"use strict";function bind(e,t,n,r){e.addEventListener?e.addEventListener(t,n,inCapture):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function one(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,inCapture):e.detachEvent&&e.detachEvent(t,n)}function getCss(e,t){return window.getComputedStyle?getComputedStyle(e)[t]:e.currentStyle?e.currentStyle[t]:e.style[t]}function animate(i,e,c){var s=0;for(var t in e)s++,function(r){var a=e[r],o=r+"timer";clearInterval(i[o]),i[o]=setInterval(function(){var e=getCss(i,r),t=e.match(/^([\-\d\.]+)([a-z]*)$/);if(t){e=1*t[1],t=t[2];var n=(a-e)/10;n=n<0?Math.floor(n):Math.ceil(n),"opacity"===r&&(n=n<0?-.05:.05),(e+=n)===a&&(clearInterval(i[o]),e=a,s--,"function"==typeof c&&0===s&&c()),i.style[r]=e+t}else clearInterval(i.timer)},30)}(t)}function animation(o,e,t,i){var c=0;for(var n in e){c++,r(n,e[n])}function r(r,a){a="opacity"==r?100*a:a,clearInterval(o[r+"Timer"]),o[r+"Timer"]=setInterval(function(){var e=window.getComputedStyle(o)[r],t=e.match(/[a-z]+$/);t=t?t[0]:"",e=parseFloat(e);var n=(a-(e="opacity"==r?100*e:e))/10;0<n?n=Math.ceil(n):n<0&&(n=Math.floor(n)),e+=n,o.style[r]="opacity"==r?e/100:e+t,e==a&&(clearInterval(o[r+"Timer"]),0==--c&&i&&"function"==typeof i&&i())},t)}}function randomColor(e){if(16==e){for(var t="0123456789abcdef",n="",r=0;r<6;r++){n+=t[parseInt(Math.random()*t.length)]}return"#"+n}if("rgb"==e)return"rgb("+parseInt(256*Math.random())+","+parseInt(256*Math.random())+","+parseInt(256*Math.random())+")"}function css(){var e=arguments[0],t=arguments[1],n=arguments[2];if(2==arguments.length)return getComputedStyle(e,!1)[t]?getComputedStyle(e,!1)[t]:e.currentStyle[t];3==arguments.length?e.style[t]=n:alert("参数个数不正确")}var Cookie={get:function(e){var t=document.cookie,n="";t=t.split("; ");for(var r=0;r<t.length;r++){var a=t[r].split("=");a[0]===e&&(n=a[1])}return n},remove:function(e,t){var n=new Date;n.setDate(n.getDate()-1),this.set(e,"x",{expires:n,path:t})},set:function(e,t,n){var r=e+"="+t;void 0===n&&(n={}),n.expires&&(r+=";expires="+n.expires.toUTCString()),n.path&&(r+=";path="+n.path),n.domain&&(r+=";domain="+n.domain),n.secure&&(r+=";secure"),document.cookie=r},setCookie:function(e,t,n,r){var a=e+"="+t;n&&(a+="; expires="+n.toUTCString()),r&&(a+="; path="+r),document.cookie=a},getCookie:function(e){var t=document.cookie;if(""==t)return"";for(var n=t.split("; "),r=0;r<n.length;r++){var a=n[r].split("=");if(a[0]==e)return a[1]}return""},delCookie:function(e,t){var n=new Date;n.setDate(n.getDate()-1),Cookie.setCookie(e,"",n,t)}};function ajax(e,t,n,r){var a=new XMLHttpRequest;"POST"==e&&n&&(t+="?"+n),a.open(e,t,!0),"POST"==e?a.send():(a.setRequestHeader("content-type","application/x-www-form-urlencoded"),a.send(n)),a.onreadystatechange=function(){4==a.readyState&&(200==a.status?r&&r(a.responseText):alert("出错了，状态码是："+a.status))}}