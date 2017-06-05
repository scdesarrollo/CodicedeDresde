document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

var mediaPlayer;

var mediaPlayer_2;
var mediaPlayer_3;
var mediaPlayer_4;
var mediaPlayer_5;


function initialiseMediaPlayer() {
   mediaPlayer = document.getElementById('media-video');
   mediaPlayer_2 = document.getElementById('media-video_2');
   mediaPlayer_3 = document.getElementById('media-video_3');
   mediaPlayer_4 = document.getElementById('media-video_4');
   mediaPlayer_5 = document.getElementById('media-video_5');


    mediaPlayer.controls = false;
    mediaPlayer_2.controls = false;
    mediaPlayer_3.controls = false;
    mediaPlayer_4.controls = false;
    mediaPlayer_5.controls = false;

   mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
   mediaPlayer_2.addEventListener('timeupdate', updateProgressBar_2, false);
   mediaPlayer_3.addEventListener('timeupdate', updateProgressBar_3, false);
   mediaPlayer_4.addEventListener('timeupdate', updateProgressBar_4, false);
   mediaPlayer_5.addEventListener('timeupdate', updateProgressBar_5, false);
}

function togglePlayPause() {
   var btn = document.getElementById('play_1');
   if (mediaPlayer.paused || mediaPlayer.ended) {

      btn.className = 'pause_btn_off';
      mediaPlayer.play();
   }
   else {
      
      btn.className = 'play_btn_off';
      mediaPlayer.pause();
   }
}

function togglePlayPause_2() {
   var btn_2 = document.getElementById('play_2');
   if (mediaPlayer_2.paused || mediaPlayer_2.ended) {

      btn_2.className = 'pause_btn_off';
      mediaPlayer_2.play();
   }
   else {
      btn_2.className = 'play_btn_off';
      mediaPlayer_2.pause();
   }
}

function togglePlayPause_3() {
   var btn_3 = document.getElementById('play_3');
   if (mediaPlayer_3.paused || mediaPlayer_3.ended) {

      btn_3.className = 'pause_btn_off';
      mediaPlayer_3.play();
   }
   else {
      
      btn_3.className = 'play_btn_off';
      mediaPlayer_3.pause();
   }
}

function togglePlayPause_4() {
   var btn_4 = document.getElementById('play_4');
   if (mediaPlayer_4.paused || mediaPlayer_4.ended) {

      btn_4.className = 'pause_btn_off';
      mediaPlayer_4.play();
   }
   else {
      
      btn_4.className = 'play_btn_off';
      mediaPlayer_4.pause();
   }
}

function togglePlayPause_5() {
   var btn_5 = document.getElementById('play_5');
   if (mediaPlayer_5.paused || mediaPlayer_5.ended) {

      btn_5.className = 'pause_btn_off';
      mediaPlayer_5.play();
   }
   else {
      
      btn_5.className = 'play_btn_off';
      mediaPlayer_5.pause();
   }
}




function updateProgressBar() {
   var progressBar = document.getElementById('progress-bar');
   var percentage = Math.floor((100 / mediaPlayer.duration) *
   mediaPlayer.currentTime);
   progressBar.value = percentage;
   progressBar.innerHTML = percentage + '% played';
}

function updateProgressBar_2() {
   var progressBar_2 = document.getElementById('progress-bar_2');
   var percentage_2 = Math.floor((100 / mediaPlayer_2.duration) *
   mediaPlayer_2.currentTime);
   progressBar_2.value = percentage_2;
   progressBar_2.innerHTML = percentage_2 + '% played';
}

function updateProgressBar_3() {
   var progressBar_3 = document.getElementById('progress-bar_3');
   var percentage_3 = Math.floor((100 / mediaPlayer_3.duration) *
   mediaPlayer_3.currentTime);
   progressBar_3.value = percentage_3;
   progressBar_3.innerHTML = percentage_3 + '% played';
}

function updateProgressBar_4() {
   var progressBar_4 = document.getElementById('progress-bar_4');
   var percentage_4 = Math.floor((100 / mediaPlayer_4.duration) *
   mediaPlayer_4.currentTime);
   progressBar_4.value = percentage_4;
   progressBar_4.innerHTML = percentage_4 + '% played';
}

function updateProgressBar_5() {
   var progressBar_5 = document.getElementById('progress-bar_5');
   var percentage_5 = Math.floor((100 / mediaPlayer_5.duration) *
   mediaPlayer_5.currentTime);
   progressBar_5.value = percentage_5;
   progressBar_5.innerHTML = percentage_5 + '% played';
}



function goFullscreen(id) {
var element = document.getElementById(id);

if((navigator.userAgent.match(/iPad|iPhone|iPod/)) ) {
 
    
         
        element.webkitEnterFullscreen();
        element.controls = false;
        element.play();
     
 
 


} else {

 

  var element = document.getElementById(id);       
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
    element.controls = false;
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
    element.controls = false;

  }  


} // ELSE


} // goFullscreen





 



 
