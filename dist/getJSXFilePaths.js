"use strict";var fsExtra=require("fs-extra");function getJSXFilePaths(a,b){var c=b?{}:[],d=function(e,f){f=f?"".concat(f,"/"):"";for(var g=0;g<e.length;g++)if(!!!e[g].match(/\.(js|jsx)$/)){var h=fsExtra.readdirSync("".concat(a).concat(f).concat(e[g]));d(h,"".concat(f).concat(e[g]))}else if(e[g].match(/\.jsx$/)){var i="".concat(a).concat(f).concat(e[g]);b?c["".concat(i)]=[]:c.push(i)}};return d(fsExtra.readdirSync(a),!1),c}module.exports=getJSXFilePaths;