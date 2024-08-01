function checkForVisibility() {
    var headers = document.querySelectorAll(".text_animate");
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        header.classList.add("textVisible");
      } else {
        header.classList.remove("textVisible");
      }
    });
  }
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
  }
