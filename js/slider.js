$(function() {
  // Initialize the testimonial carousel
  var testimonialCarousel = $('.testimonialCarousel');
  testimonialCarousel.owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    dots: false,
    onInitialized: counter,
    onChanged: counter
  });

  // Counter function for the testimonial carousel
  function counter(event) {
    var element = event.target;
    var items = event.item.count;
    var item = event.item.index + 1;

    if (item > items) {
      item = item - items;
    }
    $('#testimonialCounter').html(item + " / " + items);
  }
});

$(function() {
  // Initialize the banner slider carousel
  var bannerCarousel = $('.owl-carousel');
  bannerCarousel.owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    dots: false,
    onInitialized: counter,
    onChanged: counter
  });

  // Counter function for the banner slider carousel
  function counter(event) {
    var element = event.target;
    var items = event.item.count;
    var item = event.item.index + 1;

    if (item > items) {
      item = item - items;
    }
    $('#counter').html(item + " / " + items);
  }
});

$(function() {
  // Initialize the banner slider carousel
  var bannerCarousel = $('.imgSlider');
  
  bannerCarousel.owlCarousel({
    margin: 40,
    items: 3,
    loop: false,
    nav: true,
    dots: false,
    onInitialized: counter,
    onChanged: counter,
    responsive: {
      0: {
        items: 1 
      },
      600: {
        items: 2 
      },
      1000: {
        items: 3
      }
    }
  });

  // Counter function for the banner slider carousel
  function counter(event) {
    var element = event.target;
    var items = event.item.count;
    var item = event.item.index + 1;

    if (item > items) {
      item = item - items;
    }
    $('#imgcounter').html(item + " / " + items);
  }
});

