(function() {
  var path = window.location.pathname;
  if (path.startsWith("/")) {
    path = path.substring(1);
  }
  var targetUrl = "https://people.cs.nycu.edu.tw/~dytsou/" + path;
  
  window.location.replace(targetUrl);
  
  document.addEventListener("DOMContentLoaded", function() {
    var link = document.getElementById("redirect-link");
    if (link) {
      link.href = targetUrl;
    }
  });
})();

