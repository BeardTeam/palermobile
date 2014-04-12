function flatJson(jsonAsString,divId) {
//   $("#"+divId).html(jsonAsString);
//   var a = $.parseJSON(jsonAsString);
  var a = JSON.parse(jsonAsString);
//   $('#out').html(typeof a);
  var getall = function(comments,out) {
      var out = out || {};
      var cuser = undefined;
      var comment;
      for (var key in comments) {
	  if (key == 'username') {
	      cuser = comments[key];
	      continue;
	  }
	  if (key == 'comment') {
	      comment = comments[key];
	      continue;
	  }
	  var mytype = typeof(comments[key]);
	  if (mytype == 'object'
	  || mytype == 'array') {
	      out=getall(comments[key],out);
	  };
      }
      if (cuser !== undefined) {
	  if (out[cuser] === undefined) {
	      out[cuser] = [];
	  }	  
	out[cuser].push(comment);
      }
      return (out);
  }
  var b = getall(a);
//   $('#out').html(typeof b);
  $('#out').html(JSON.stringify(b));
//   $("#"+divId).html(b);
}