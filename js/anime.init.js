$(document).ready(function(){

  var animateBox1 = anime({
    targets: '.animateBox1',
    translateY: 20,
    direction: 'alternate',
    autoplay: false
  });

  var animateBox2 = anime({
    targets: '.animateBox2',
    translateY: 20,
    direction: 'alternate',
    autoplay: false
  });

  var animateBox3 = anime({
    targets: '.animateBox3',
    translateY: 20,
    direction: 'alternate',
    autoplay: false
  });

  var animateBox4 = anime({
    targets: '.animateBox4',
    translateY: 20,
    direction: 'alternate',
    autoplay: false
  });

  animateBox1.settings.complete = function() {
    animateBox2.restart();
  }

  animateBox2.settings.complete = function() {
    animateBox3.restart();
  }

  animateBox3.settings.complete = function() {
    animateBox4.restart();
  }

  animateBox4.settings.complete = function() {
    animateBox1.restart();
  }

  animateBox1.play();

});
