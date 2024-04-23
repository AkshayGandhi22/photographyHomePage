var owl = $('.owl-carousel');
owl.owlCarousel({
  nav: true,
  loop: false,
  dots:false,
  responsive: {
    1000: {
      items: 1
    }
  }
})

// Number Count
  var totalItems = $('.slide').length;
var currentIndex = $('.active').index() + 1;
$('.num').html(''+currentIndex+'/'+totalItems+'');
var  owl = $('.owl-carousel');
owl.owlCarousel();
$('.owl-prev').click(function() {
    currentIndex = $('.owl-item.active').index() + 1;
   $('.num').html(''+currentIndex+'/'+totalItems+'');
})

$('.owl-next').click(function() { 
    currentIndex = $('.owl-item.active').index() + 1;
   $('.num').html(''+currentIndex+'/'+totalItems+'');
})
