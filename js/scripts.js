/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  window.history.pushState("object or string", "Title", "/"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);
//   var abi = '[{"constant":false,"inputs":[{"name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newImplementation","type":"address"},{"name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"implementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_logic","type":"address"},{"name":"_admin","type":"address"},{"name":"_data","type":"bytes"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"implementation","type":"address"}],"name":"Upgraded","type":"event"}]';
// var contractAddress = '0xeea9aE787f3A620072d13b2cdC8cabFFb9c0aB96';
// var token = web3.eth.contract(abi).at(contractAddress);
// console.log(token.balanceOf('0xed9a70f8d8a54ddc98dfaabb47630c249690e4be').toNumber()); 

})(jQuery); // End of use strict