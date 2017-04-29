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
      $(this).animate({top:'0px'}, 375);
    });
}

// function tabAnimation() {
//   $("li").hover(function(){
//         $(this).animate({top: 'toggle'});
//   });
// }

function activeTab() {
  $("li").mouseover(function() {
    $(this).addClass('active');
  });
  $(this).mouseout(function() {
    $("li").removeClass('active');
  });
}

function preventClickDefault() {
  $("li").click(function(event) {
    event.preventDefault();
   }); 
}

function hideShowArticle1() {
  $(".tab").mouseover(function() {
    $("#article1").removeClass("active");
  });
  $(".tabs1").mouseout(function() {
    $("#article1").addClass("active");
  });
}

function linkTabAndArticle() {
  

// FIRST TAB..................................
  $("#tab1").mouseover(function() {
    $("#article2").addClass("active");
  });
  $("#tab1").mouseout(function() {
    $("#article2").removeClass("active");
  });

// SECOND TAB..................................
  $("#tab2").mouseover(function() {
    $("#article3").addClass("active");
  });
  $("#tab2").mouseout(function() {
    $("#article3").removeClass("active");
  });

// THIRD TAB..................................
  $("#tab3").mouseover(function() {
    $("#article4").addClass("active");
  });
  $("#tab3").mouseout(function() {
    $("#article4").removeClass("active");
  });

// FOURTH TAB..................................
  $("#tab4").mouseover(function() {
    $("#article5").addClass("active");
  });
  $("#tab4").mouseout(function() {
    $("#article5").removeClass("active");
  });

// FIFTH TAB..................................
  // $("#tab2").mouseover(function() {
  //   $("#article1").removeClass("active");
  //   $("#article6").addClass("active");
  // });
  // $("#tab2").mouseout(function() {
  //   $("#article6").removeClass("active");
  //   $("#article1").addClass("active");
  // });
}

function getHref() {
  $("li").mouseover(function() {
    var href = $('a', this).attr('href');

    $(this).on('click', function() {
      console.log("link = ", href);
    });   
  });
}

$(document).ready(function(){
  hideShowArticle1()
  appendContentHeader();
  tabAnimation();
  activeTab();
  preventClickDefault();
  linkTabAndArticle();
  getHref();

}); 