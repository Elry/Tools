var xhr = new XMLHttpRequest();

xhr.open("POST", "https://url.com", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
httpRequestDebugger(xhr);
xhr.send();

function httpRequestDebugger(xhr){
      xhr.addEventListener("load", transferLoading);
      xhr.addEventListener("error", transferFailed);
      xhr.addEventListener("abort", transferCanceled);
      xhr.addEventListener("progress", updateProgress);
      xhr.addEventListener("timeout", transferTimeout);
      xhr.addEventListener("loadend", transferComplete);
      xhr.addEventListener("loadstart", transferStarting);        
      xhr.addEventListener("readystatechange", transferState); 

      xhr.onreadystatechange = function(){
          if(xhr.readyState === 4 && xhr.status === 200){
              console.log(xhr.responseText);
          }
      };

      function updateProgress (evt) {
          if(evt.lengthComputable){
              var percentComplete = evt.loaded / evt.total * 100;
              console.log(evt);
              console.log(percentComplete);
          }else{ console.log(evt); }
      }
      function transferState(evt){
          if(evt.readyState === 4 && evt.status === 200){
              console.log(xhr.responseText);
          } 
      }
      function transferFailed(evt) { console.log(evt); }        
      function transferTimeout(evt){ console.log(evt); }        
      function transferStarting(evt){ console.log(evt); }
      function transferLoading(evt) { console.log(evt); }
      function transferComplete(evt) { console.log(evt); }        
      function transferCanceled(evt) { console.log(evt.response); }
}
