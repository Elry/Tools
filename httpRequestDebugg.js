var xhr = new XMLHttpRequest();

xhr.open("POST", "https://url.com", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
httpRequestDebugger(xhr);
xhr.send();

function httpRequestDebugger(xhr){
      xhr.addEventListener("progress", updateProgress);
      xhr.addEventListener("load", transferComplete);
      xhr.addEventListener("error", transferFailed);
      xhr.addEventListener("abort", transferCanceled);
      function updateProgress (oEvent) {
          if (oEvent.lengthComputable) {
          var percentComplete = oEvent.loaded / oEvent.total * 100;
          console.log(oEvent);
          console.log(percentComplete);
          } else {
          console.log(oEvent);
          }
      }

      function transferComplete(evt) { console.log(evt); }
      function transferFailed(evt) { console.log(evt); }
      function transferCanceled(evt) { console.log(evt); }
  }
