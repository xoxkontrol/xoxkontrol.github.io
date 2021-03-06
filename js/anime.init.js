$(document).ready(function(){

  var animateBox1 = anime({
    targets: '#box1',
    translateX: -30,
    direction: 'alternate',
    autoplay: false
  });

  var animateBox2 = anime({
    targets: '#box2',
    translateX: 30,
    direction: 'alternate',
    autoplay: false
  });

  var animateBox3 = anime({
    targets: '#box3',
    translateX: -30,
    direction: 'alternate',
    autoplay: false
  });

  var animateBox4 = anime({
    targets: '#box4',
    translateX: 30,
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
