"use strict";function getData(){var e=location.hash.replace("#",""),n=new XMLHttpRequest;n.open("GET","https://jsonplaceholder.typicode.com/albums/"+e+"/photos",!0),n.onload=function(){if(200===this.status){var e=JSON.parse(this.responseText);renderThumbnail(e)}},n.send()}window.addEventListener("hashchange",getData);var renderThumbnail=function(e){for(var n="",t=0;t<10;t++)n+="\n        <div onClick=\"renderBigImage('"+e[t].url+"')\" data-id="+e[t].id+">\n            <img src="+e[t].thumbnailUrl+" />\n        </div>\n        ";document.getElementById("images").innerHTML=n},renderBigImage=function(e){var n="\n    <img src="+e+" />\n    ";document.getElementById("big-image").innerHTML=n};