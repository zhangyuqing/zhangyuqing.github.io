// LinkedIn Profile
var linkedin_link = "LinkedIn Profile: <a href='https://www.linkedin.com/in/yuqing-zhang-272612a4'>Yuqing Zhang</a>";

function render_footer() {
  footer_str = "<p>";
  footer_str += linkedin_link;
  footer_str += "</ p>";
  document.getElementById("footer_wrap_inner").innerHTML += footer_str;
}
