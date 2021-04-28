		// Put event listeners into place
		window.addEventListener("DOMContentLoaded", function() {
			// Grab elements, create settings, etc.
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            var video = document.getElementById('video');
            var mediaConfig =  { video: true };
            var errBack = function(e) {
            	console.log('An error has occurred!', e)
            };

			// Put video listeners into place
            if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia(mediaConfig).then(function(stream) {
					//video.src = window.URL.createObjectURL(stream);
					video.srcObject = stream;
                    video.play();
                });
            }

            /* Legacy code below! */
            else if(navigator.getUserMedia) { // Standard
				navigator.getUserMedia(mediaConfig, function(stream) {
					video.src = stream;
					video.play();
				}, errBack);
			} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
				navigator.webkitGetUserMedia(mediaConfig, function(stream){
					video.src = window.webkitURL.createObjectURL(stream);
					video.play();
				}, errBack);
			} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
				navigator.mozGetUserMedia(mediaConfig, function(stream){
					video.src = window.URL.createObjectURL(stream);
					video.play();
				}, errBack);
			}

			// Trigger photo take
			document.getElementById('snap').addEventListener('click', function() {
				context.drawImage(video, 0, 0, 640, 480);
			});
		}, false);

function filter() {
  var x = document.getElementById("video");
  var y = document.getElementById("canvas");
  if (x.style.filter === "none") {
    x.style.filter = "invert(100%)";
    y.style.filter = "invert(100%)";
  } else {
    x.style.filter = "none";
    y.style.filter = "none";
  }
}

function share() {
document.getElementById("div").style.visibility = "visible";
}
function closeDiv() {
document.getElementById("div").style.visibility = "hidden";
}
function address() {
var email = document.getElementById("email");
document.getElementById("sender").href = "mailto:" + email.value + "?subject=Try%20this%20online%20camera%20for%20free&body=Try out this amazing free online camera with filters at https://lb123658.github.io/camera";
}
function cancel() {
location.replace("about:blank");
}
function confirm() {
document.getElementById("alert").style.visibility = "hidden";
document.getElementById("body").style.opacity = "1.0";
document.getElementById("body").style.pointerEvents = "auto";
}
function shareGame() {
  var copyText = document.getElementById("link");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
document.getElementById("green").style.visibility = "visible";
}  
function exito() {
document.getElementById("green").style.visibility = "hidden";
}
