function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

    $(document).ready(function() {

        $('.mobile-menu').on('click', function() {
            $('.mobile-menu').toggleClass('active');
            $('body').toggleClass('lock');
            
        })


        $('.offers-slider').slick({
            slidesToShow: 5,
            dots: true,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                  breakpoint: 1032,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });

        
        $('.tabs-link-link').on('click', function(e) {
            e.preventDefault();

            $('.tabs-content').removeClass('tabs-content-active');
            $('.tabs-link-link').removeClass('active');
            $(this).addClass('active');
            $($(this).attr('href')).addClass('tabs-content-active');
        }) 
        $('.tabs-link-link:first').click();

        $('.footer-mobile-menu').on('click', function() {
          $(this).toggleClass('active');
          if($(this).hasClass('active')) {
            $(this).parent('.footer-links').find('ul').slideDown();
            $(this).find('span').addClass('active');
          } else {
            $(this).parent('.footer-links').find('ul').slideUp();
            $(this).find('span').removeClass('active');
          }
        })
    })