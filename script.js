// For active links
$(document).ready(function(){
    $(".open-btn").on('click', function(){
        $('.sidebar').addClass('active');
        $(this).hide(); // Hide the open button
    });
    $(".close-btn").on('click', function(){
        $('.sidebar').removeClass('active');
    });

    $(".sidebar ul li a").on('click', function(){
        $(".sidebar ul li.active").removeClass('active');
        $(this).parent().addClass('active');
        $(".navbar-brand").text($(this).data('title'));
    });

 
});


//  For tabs
function openTab(evt, cityName) {
    var i, tabcontent, side_links;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    side_links = document.getElementsByClassName("side_links");
    for (i = 0; i < side_links.length; i++) {
      side_links[i].className = side_links[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }