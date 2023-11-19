$( function () {
    $('.slider1').slick({
        prevArrow:'.leftArrow1',
        nextArrow:'.rightArrow1',
        dots:true,
        dotsClass:'myDots',
    });

    $('.slider2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'.leftArrow',
        nextArrow:'.rightArrow',
        centerMode: true,
        centerPadding: '0',
      });

  })