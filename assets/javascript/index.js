// $(".contact-btn").on("click", function(event) {
//     event.preventDefault();
//     console.log("button is working")
// });

$(document).ready(function () {
    window.onscroll = function () { scrollFunction() };
  
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-70px";
      }
    }
    $('.parallax').parallax();
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();

  });


//   <script>
//   $(document).ready(function () {
//     $('.parallax').parallax();
//     $('.modal').modal();
//     $('.dropdown-trigger').dropdown();
//     $('.collapsible').collapsible();
//     $('.sidenav').sidenav();
//   });
// </script>