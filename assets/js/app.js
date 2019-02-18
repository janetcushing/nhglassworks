$(document).ready(function () {

  // $('#myCarousel').carousel({
  //     interval: 4000
  //   })


  //   $('.carousel .item').each(function(){
  //     var next = $(this).next();
  //     if (!next.length) {
  //       next = $(this).siblings(':first');
  //     }
  //     next.children(':first-child').clone().appendTo($(this));

  //     for (var i=0;i<2;i++) {
  //       next=next.next();
  //       if (!next.length) {
  //           next = $(this).siblings(':first');
  //         }

  //       next.children(':first-child').clone().appendTo($(this));
  //     }
  //   });
  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });


  $('#bs4-multi-slide-carousel').carousel({
    interval: 10000
  })

  // $('#submit').on('click', function (event) {
  //   console.log('contact submit button hit');
  //   event.preventDefault();
  //   const name = $('#nameInput').val();
  //   const email = $('#emailInput').val();
  //   const message = $('#comment').val();
  //   console.log('name ' + name);
  //   const emailToSend = ('mailto:janet.cushing@gmail.com?subject=Hello from ' 
  //   + name + ' (' + email + ')' + '&body=' + message);
  //   $('#nameInput').val("");
  //   $('#emailInput').val("");
  //   $('#comment').val("");
  //   window.location.href = emailToSend;
  // });

});