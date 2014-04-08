var flatten;

var separator =  ".";
flatten = /*module.exports  =*/ function(obj, path, result) {
  var key, val, _path;
  path = path || [];
  result = result || {};
  for (key in obj) {
    val = obj[key];
//     _path = path.concat([key]);
      _path = [key];
    if (val instanceof Object) {
      flatten(val, _path, result);
    } else {
      result[_path.join(separator)] = val;
    }
  }
  return result;
};