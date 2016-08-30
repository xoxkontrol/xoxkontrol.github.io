$(document).ready(function(){

  window.sr = ScrollReveal({ viewOffset  : { top: 100, right: 0, bottom: 50, left: 0 } });
  sr.reveal('.scrollReveal', { reset: true, delay: 100, duration: 800 });

  $(".button-collapse").sideNav();

  $('.parallax').parallax();

  $('select').material_select();

  $("#carouselIntro").owlCarousel({

    items: 3

    ,itemsTablet: [ 992, 2 ]

    ,itemsMobile : [600,1]

    ,rewindSpeed : 1200

    ,paginationSpeed : 2000

    ,autoPlay: true

    ,stopOnHover: true

    ,pagination: false

  });

  $("#carouselHome").owlCarousel({

    items: 2

    ,itemsTablet: [ 992, 1 ]

    ,autoPlay: true

    ,stopOnHover: true

    ,pagination: false

  });

  $("#carouselPortfolio").owlCarousel({

    items: 1

    ,autoPlay: true

    ,singleItem: true

    ,stopOnHover: true

    ,pagination: false

  });

  $('.button-collapse2').sideNav({

      menuWidth: 280,

      closeOnClick: false

    }

  );

  $(function() {

    $('a[href*="#"]:not([href="#"])').click(function() {

      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {

          $('html, body').animate({

            scrollTop: target.offset().top

          }, 1000);

          return false;

        }

      }

    });

  });

  $('#graph1').highcharts({
    chart: {
      type: 'bar',
      backgroundColor: 'white'
    },
    title: {
      text: 'Cloud Data'
    },
    xAxis: {
      categories: [ 'Apples', 'mango' ]
    },
    yAxis: {
      title: {
          text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [ 4, 2 ]
    }]
  });

  $('#graph2').highcharts({

    chart: {
      type: 'pie',
      backgroundColor: 'white'
    },
    title: {
      text: 'Cloud Data'
    },
    slice: {
      categories: ['Apples', 'Oranges']
    },
    series: [{
      name: 'John',
      data: [5, 3]
    }]

  });

  $('#graph3').highcharts({

    chart: {
      type: 'pie',
      backgroundColor: 'white'
    },
    title: {
      text: 'Cloud Data'
    },
    slice: {
      categories: ['Apples', 'Oranges']
    },
    series: [{
      name: 'John',
      data: [5, 3]
    }]

  });

  $('#graph4').highcharts({

    chart: {
      type: 'line',
      backgroundColor: 'white'
    },
    title: {
      text: 'Cloud Data'
    },
    xAxis: {
      categories: ['Months',2,3,4,5,6,7,8,9]
    },
    yAxis: {
      title: {
          text: 'Active Users'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 14, 6, 35, 3, 59, 54, 67, 17 ]
    }
    , {
      name: 'John',
      data: [5, 30, 4, 2, 4, 67, 8, 3, 60]
    }]

  });

});
