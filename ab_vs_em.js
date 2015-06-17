$(function(){

  var tileSurvey = '<script>(function(t,e,o,s){var c,n,r;t.SMCX=t.SMCX||[],e.getElementById(s)||(c=e.getElementsByTagName(o),n=c[c.length-1],r=e.createElement(o),r.type="text/javascript",r.async=!0,r.id=s,r.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/WIsoWNMVXNkX4Lu0z7WX7Z8oE7dok2er4HgjbBtlsUz_2F26c7mYQq_2BOUN_2B1ArR7qU.js"].join(""),n.parentNode.insertBefore(r,n))})(window,document,"script","smcx-sdk");</script>';

var tileId="G8ZBCJC";
var emailId="GKQ9J8L";

  var emailSurvey = '<script>(function(t,e,s,o){var n,c,r;t.SMCX=t.SMCX||[],e.getElementById(o)||(n=e.getElementsByTagName(s),c=n[n.length-1],r=e.createElement(s),r.type="text/javascript",r.async=!0,r.id=o,r.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/O6iOVOPN7x_2FwMk9IDv_2F9TkryrmnssZM0rvLCDZ05_2B7sTLxjQFiop1NLog6FlFKQs.js"].join(""),c.parentNode.insertBefore(r,c))})(window,document,"script","smcx-sdk");</script>';

  $(".step").hide();
  $("#step1").show();

  if($("img#email").length!==1){
    $("#start_tile").show();
  }


  $("#start").click(function(e){
     $("#step1").show();
     $(".header").hide();
     $("#begin").hide();
     $(".js-modal-close, .modal-overlay").trigger("click");
  });

  $("#goto2").click(function(e){
    e.preventDefault();
     $(".header").hide();
    $(".step").hide();
      $("#step2").show();
  });

  $("#goto3").on("click", function(e){
    e.preventDefault();
    $(".step").hide();

    if($("img#email").length===1){
     $("#survey").append(emailSurvey); 
     $("#survey_code").text(emailId); 
    }else{

     $("#survey_code").text(tileId); 
     $("#survey").append(tileSurvey); 
    }
      $("#step3").show();
  });

 $("#goto4").on("click", function(e){
    e.preventDefault();
    $(".step").hide();
      $("#step4").show();
 });


});
