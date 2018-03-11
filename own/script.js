$(function() {

    var glyphs = document.getElementById('stats');
    var desc = document.getElementById('stats2');

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

  $('.btn1').click(function () {
    $(glyphs).fadeOut('slow', function() {
    $(desc).fadeTo("slow", 1.0);
    });
  });

  $('.btn2').click(function () {
    $(desc).fadeOut('slow', function() {
    $(glyphs).fadeTo("slow", 1.0);
    });
  });
});

function showAnnotations()
{
  d3.selectAll(".annotation").style("display", "block");
}

function hideAnnotations()
{
  d3.selectAll(".annotation").style("display", "none");
}

var nextBoxToHilight = 1;
function highlightBox()
{
  // d3.selectAll("#impress").transition().style("border","solid red 3px");
  var glyphs = document.getElementById("glyphs").style.border = "solid red 3px";
  // insert fadeIn of div thats places correctly

}

function unhighlightBox()
{
  d3.selectAll(".step").transition().style("border",null);
  nextBoxToHilight = 1;
}
