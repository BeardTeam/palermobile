var reader;
var progress = document.querySelector('.percent');

function abortRead() {
  reader.abort();
}

function errorHandler(evt) {
  switch(evt.target.error.code) {
    case evt.target.error.NOT_FOUND_ERR:
      alert('File Not Found!');
      break;
    case evt.target.error.NOT_READABLE_ERR:
      alert('File is not readable');
      break;
    case evt.target.error.ABORT_ERR:
      break; // noop
    default:
      alert('An error occurred reading this file.');
  };
}

function updateProgress(evt) {
  // evt is an ProgressEvent.
  if (evt.lengthComputable) {
    var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
    // Increase the progress bar length.
    if (percentLoaded < 100) {
      progress.style.width = percentLoaded + '%';
      progress.textContent = percentLoaded + '%';
    }
  }
}

function handleFileSelect(evt) {
  // Reset progress indicator on new file selection.
  var progress = document.querySelector('.percent');
  progress.style.width = '0%';
  progress.textContent = '0%';

  reader = new FileReader();
  
  var file = evt.target.files[0];
  
  reader.onerror = errorHandler;
  reader.onprogress = updateProgress;
  reader.onabort = function(e) {
    alert('File read cancelled');
  };
  reader.onloadstart = function(e) {
    document.getElementById('progress_bar').className = 'loading';
  };
  reader.onload = /*function(e) {
    // Ensure that the progress bar displays 100% at the end.
    progress.style.width = '100%';
    progress.textContent = '100%';
    setTimeout("document.getElementById('progress_bar').className='';", 2000);
  }*/ (function(theFile){return function(e){
      progress.style.width = '100%';
      progress.textContent = '100%';
      setTimeout("document.getElementById('progress_bar').className='';", 2000);
      
      handleContentFile(e.target.result);
    
  }; })(file);

  // Read in the image file as a binary string.
//   reader.readAsBinaryString(evt.target.files[0]);
//   reader.readAsText(evt.target.files[0]);
  reader.readAsText(file);
}

function handleContentFile(content) {
//   $('#original').html(content);
//   var a = content;
//   var obj = JSON.parse(a);
//   $('#out').html(typeof obj);
//   flatJson(content,'out');
  
  var obj = JSON.parse(content);
//   var flat = flatten(obj);
  var flat = JSONUtils.Flatten(obj);
  var asString = JSON.stringify(flat);
   
   /*var container = document.querySelector('#container');
   container.querySelector('input[type="text"]').value = asString;*/
   
  var firstKey = "citta"
//    var replaced = asString.replace( new RegExp( /[0-9]+\.citta/,"gm" ), '},{"citta"');
//   var replaced = asString;
  var replaced = asString.replace( /\,\\\"\[(\d){1,3}\]\.citta\\\"/gm, '},{"'+firstKey+'"');
//     replaced = replaced.replace("\\","");
   
//    $('#contenteditable').val(asString);
   
//    $('#out').html(JSON.stringify(flat));
//     var newObj = JSON.parse(replaced);
//    $('#contenteditable').html( replaced );
   $('#contenteditable').html( asString );
  
//   $('#out').html();
}