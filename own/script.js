var glyphs = document.getElementById('stats');
var desc = document.getElementById('stats2');

$(function() {

  $(desc).fadeOut('slow', function() {
    $(glyphs).fadeTo("slow", 1.0);
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // Esc
      var url = window.location.href;
      url = url.replace(/\/[^\/]*$/, '/overview');
      window.location.replace(url);
    }
  });

  $('.btn1').click(function() {
    $(glyphs).fadeOut('slow', function() {
      $(desc).fadeTo("slow", 1.0);
    });
  });

  $('.btn2').click(function() {
    $(desc).fadeOut('slow', function() {
      $(glyphs).fadeTo("slow", 1.0);
    });
  });
});

var sometext = document.getElementById("overlaySome");

function highlightBox() {
  // d3.selectAll("#impress").transition().style("border","solid red 3px");
  var glyphs = document.getElementById("glyphs").style.border = "solid rgb(23, 144, 46) 3px";
  // insert fadeIn of div thats places correctly

  var af = document.getElementById("affected_individuals").style.border = "solid rgb(23, 144, 46) 3px";

  var type = document.getElementById("types_of_attacks").style.border = "solid rgb(23, 144, 46) 3px";

  var number = document.getElementById("Breaches_per_capita").style.border = "solid rgb(23, 144, 46) 3px";

  $(sometext).fadeTo("slow", 1);
}

function unhighlightBox() {
  d3.selectAll(".step").transition().style("border", null);
  $(sometext).fadeTo("slow", 0)
}

function showAnnotations()
{
  d3.selectAll(".annotation").style("opacity", "1");
}

function hideAnnotations()
{
  d3.selectAll(".annotation").style("opacity", "0");
}

$(window).bind('hashchange', function() {
 /* things */
 var lastpath = (location.href.match(/([^\/]*)\/*$/)[1]);
 if (lastpath === "overview" || lastpath === "affected_individuals" || lastpath === "types_of_attacks" ||  lastpath === "Breaches_per_capita") {
   document.getElementById('glyph_af1').style.opacity = "1";
   document.getElementById('type_anno1').style.opacity = "1";
   document.getElementById('map_anno1').style.opacity = "1";
 } else {
   document.getElementById('glyph_af1').style.opacity = "0";
    document.getElementById('type_anno1').style.opacity = "0";
   document.getElementById('map_anno1').style.opacity = "0";
 }
});
