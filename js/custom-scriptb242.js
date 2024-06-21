   

jQuery( document ).ready(function() {
  // Handler for .ready() called.
  jQuery(".close").click(function() {
      // changes the iframe src to prevent playback or stop the video playback in our case
    jQuery('.modal-content iframe').each(function(index) {
       jQuery(this).attr('src', $(this).attr('src'));
       return false;
    });
     
});

jQuery(function(){
        jQuery("#play-button").click(function () {
          jQuery(this).parents('.video-section').addClass('video-parent');
          jQuery("#pause-button").show();
          jQuery("#play-button").hide();
          jQuery(".video-placeholder-img").css({visibility : "hidden", opacity : "0" });
          jQuery("#video").css({visibility : "visible", opacity : "1" });
        });
        jQuery("#pause-button").click(function () {
          jQuery("#play-button").show();
          jQuery("#pause-button").hide();
        });
      });

});
   
var iframe = document.getElementById('iframe-palyer');

if(iframe != null) {
    var player_n = $f(iframe);
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player_n.api("play");
  });
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player_n.api("pause");
  });
}


var player;

function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady,
    },
  });
}


function onPlayerReady(event) {
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    player.playVideo();
    setTimeout(function(){
        jQuery('#pause-button').css("z-index",-1);
        jQuery('#pause-button').css("opacity",0);
    }, 500);
  });

  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function () {
    player.pauseVideo();
    jQuery('#pause-button').css("z-index",-1);
  });
}


// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
