
$(document).ready(function () {
    window.onscroll = function () { scrollFunction() };
  
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav-size").style.top = "0";
        document.getElementById("sticky-footer").style.bottom = "0";
 
      } else {
        document.getElementById("nav-size").style.top = "-70px";
        document.getElementById("sticky-footer").style.bottom = "-100px";
        
        
      }


    }

  });




