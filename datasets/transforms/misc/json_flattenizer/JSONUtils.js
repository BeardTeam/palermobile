/*
* SyncToScriptDB.JsonUtils.gs is part of OpenFarmacie@Ravenna - http://www.openfarmacieravenna.url.ph
* Released under GPLv3, available at http://www.gnu.org/licenses
* Copyleft 2014, Massimiliano Leone <maximilianus@gmail.com> - http://plus.google.com/+MassimilianoLeone
* 
* For any information, send a email to:
* ° Massimiliano Leone - maximilianus@gmail.com
* ° Antonio Notarangelo - antonio.notarangelo@outlook.com / progsoul91@gmail.com
*/

/*
* based on https://gist.github.com/chrislkeller/3013360
*/

/*
* from: http://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects
*/

var SEPARATOR = ".";
var JSONUtils = {};
JSONUtils.Flatten = function(data) {
    var result = {};
    function recurse (cur, prop) {
	if (Object(cur) !== cur) {
	    result[prop] = cur;
	} else if (Array.isArray(cur)) {
	    for(var i=0, l=cur.length; i<l; i++)
	      recurse(cur[i], prop + "[" + i + "]");
// 	      recurse(cur[i], prop);
	    if (l == 0)
		result[prop] = [];
	} else {
	    var isEmpty = true;
	    for (var p in cur) {
		isEmpty = false;
		recurse(cur[p], prop ? prop+SEPARATOR+p : p);
	    }
	    if (isEmpty && prop)
		result[prop] = {};
	}
    }
    recurse(data, "");
    
    var asString = JSON.stringify(result);
    var replaced = asString.replace( /\,\"\[(\d){1,3}\]\.citta\"/gm, '},{"citta"');

    result = JSON.parse(replaced);
    return result;
}
JSONUtils.Unflatten = function(data) {
    "use strict";
    if (Object(data) !== data || Array.isArray(data)) 
      return data;
  // separator is "."
    var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
	resultholder = {};
    for (var p in data) {
      var cur = resultholder,
	  prop = "",
	  m;
      while (m = regex.exec(p)) {
	cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
	prop = m[2] || m[1];
      }
      cur[prop] = data[p];
    }
    return resultholder[""] || resultholder;
};
//JSONUtils.TrimUselessOld = function(data) {
//  var y;
//  for (var x in data) {
//    if ( Object.prototype.hasOwnProperty.call(data,x)) {
//      y = data[x];
//      if (y==="null" || y===null || y==="" || typeof y === "undefined" || y === undefined) {
//        Logger.log("find useless y: "+y+" data: "+x);
//        delete data[x];
//      }
//    }
//  }
//}
JSONUtils.TrimUseless = function(data) {
  var y;
  for (var x in data) {
    y = data[x];
    if (y==="null" || y===null || y==="" || y=="" || typeof y === "undefined" || (y instanceof Object && Object.keys(y).length == 0)) {
      delete data[x];
    }
    if (y instanceof Object) y = JSONUtils.TrimUseless(y);
  }
  return data;  
}