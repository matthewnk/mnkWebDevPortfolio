function appendContentHeader() {
  $(document).ready(function(){
    $(".contentHeader").append("<h2>This is a set of animated tabs.</h2>");
  });
}

// function tabAnimation() {
//   $("li").hover(function(){
//         $(this).animate({top: '-40px'}, 200);
//     }, function() {
//       $(this).animate({top:'-15px', opacity: '.85'}, 200);
//     });
// }

function tabAnimation() {
  $("li").hover(function(){
        $(this).animate({top: '-40px'}, {easing: 'swing', duration: 250});
    }, function() {
      $(this).animate({top:'0px'}, 200);
    });
}

// function tabAnimation() {
//   $("li").hover(function(){
//         $(this).animate({top: 'toggle'});
//   });
// }

function activeTab() {
  $("li").mouseover(function() {
    $("li").addClass('active');
  });
  $("li").mouseout(function() {
    $("li").removeClass('active');
  });
}

function preventClickDefault() {
  $("li").click(function(event) {
    event.preventDefault();
   }); 
}

function linkTabAndArticle() {
  $("#tab1").mouseover(function() {
    $("#article1").addClass("active");
  });
  $("#tab1").mouseout(function() {
    $("#article1").removeClass("active");
  });

  $("#tab2").mouseover(function() {
    $("#article2").addClass("active");
    $("#article2").css("background-color", "#f26522");
  });
  $("#tab2").mouseout(function() {
    $("#article2").removeClass("active");
  });

  $("#tab3").mouseover(function() {
    $("#article3").addClass("active");
    $("#article3").css("background-color", "#669933");
  });
  $("#tab3").mouseout(function() {
    $("#article3").removeClass("active");
  });

  $("#tab4").mouseover(function() {
    $("#article4").addClass("active");
    $("#article4").css("background-color", "#362f2d");
  });
  $("#tab4").mouseout(function() {
    $("#article4").removeClass("active");
  });

  $("#tab5").mouseover(function() {
    $("#article5").addClass("active");
    $("#article5").css("background-color", "#669933");
  });
  $("#tab5").mouseout(function() {
    $("#article5").removeClass("active");
  });
}

function getHref() {
  $("li").mouseover(function() {
    var href = $('a', this).attr('href');

    $(this).on('click', function() {
      console.log("link = ", href);
    });   
  });
}

// function divClick() {
//   $(".tab").click(function() {
//     window.location = $(this).find("a").attr("href"); 
//     return false;
//   });
// }

$(document).ready(function(){
  // divClick();
  appendContentHeader();
  tabAnimation();
  activeTab();
  preventClickDefault();
  linkTabAndArticle();
  getHref();

}); 