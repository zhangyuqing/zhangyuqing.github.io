// the subtitle for all pages
var position_str = "PhD Student in Bioinformatics";

// the navigation buttons
var buttons = "<a class='header_buttons' href='index.html'>Home</a> "
    + "<a class='header_buttons' href='research.html'>Research Projects</a> "
    + "<a class='header_buttons' href='software.html'>Software</a> "
    + "<a class='header_buttons' href='publications.html'>Publications</a> "
    + "<a class='header_buttons' href='personal.html'>Personal</a> ";

function render_header() {
  header_str = "";
  header_str += "<h1 class='project_title'>" + document.title + "</h1>";
  header_str += "<h2 class='project_tagline'>" + position_str + "</h2>";
  header_str += buttons;
  document.getElementById("header_wrap_inner").innerHTML += header_str;
}
