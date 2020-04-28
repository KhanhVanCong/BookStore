$(document).ready(() => {

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Disable Loading
  $('.js-loading').removeClass('loading--active');

  // Back to Top
  const btnbackTop = document.getElementById('back-top');
  btnbackTop.addEventListener('click', backToTop);
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() { scrollFunction(); };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnbackTop.setAttribute('class', 'back-top--active');
    } else {
      btnbackTop.setAttribute('class', 'back-top--hidden');
    }
  }
  
  // Add Carousel
  $('.js-production__carousel').slick({
    slidesToShow: 1,
    dots: true,
    centerMode: true,
    centerPadding: '350px',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          centerPadding: '300px',
        },
      },
      {
        breakpoint: 1025,
        settings: {
          centerMode: false,
          autoplay: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.js-types-book__carousel').slick({
    slidesToShow: 5,
    dots: false,
    infinite: false,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.js-new-arrivals__carousel').slick({
    slidesToShow: 4,
    dots: false,
    centerMode: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1367,
        settings: {

        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
        },
      },
    ],
  });

  $('.js-author__carousel').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
  });

  $('.js-featured__carousel').slick({
    slidesToShow: 4,
    dot: false,
    arrows: false,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          centerPadding: '300px',
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,

        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $('.js-sale__carousel').slick({
    slidesToShow: 3,
    dot: false,
    arrows: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          centerPadding: '300px',
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.js-instagram__carousel').slick({
    slidesToShow: 3,
    dot: false,
    arrows: false,
  });

  $('.books__cart').on('click', function () {
    event.preventDefault();
    const $this = $(this);
    loadingAnimation($this, 'fa fa-spinner fa-spin', 'icon_check', 1000, false);
  });

  $('.books__quick-view').on('click', function () {
    event.preventDefault();
    const $this = $(this);
    loadingAnimation($this, 'fa fa-spinner fa-spin', 'icon_search', 1000, true);
  });

  function loadingAnimation(item, classLoading, classChange, timeOut, isCallModal) {
    item.children().attr('class', classLoading);
    setTimeout(() => {
      item.children().attr('class', classChange);
      if (isCallModal) {
        $('#modal-product-content').modal();
        $('.js-modal-product__carousel').not('.slick-initialized').slick({
          slidesToShow: 1,
          dots: true,
          arrows: false,
          autoplay: false,
          autoplaySpeed: 2000,
        });
      }
    }, timeOut);
  }

  $('.books__wish-list').on('click', function () {
    event.preventDefault();
    const $this = $(this);
    $this.children().attr('class', 'fa fa-spinner fa-spin');
    setTimeout(() => {
      $this.children().attr('class', 'icon_heart');
      $('.modal-added').addClass('modal-added--show');
      setTimeout(() => {
        $('.modal-added').removeClass('modal-added--show');
      }, 2000);
    }, 1000);
  });


  // On Sale Click
  $('.sale__book-link').on('click', function () {
    event.preventDefault();
    $('.sale__book-link').each((i, obj) => {
      $(obj).removeClass('sale__book-link--active');
    });
    $(this).addClass('sale__book-link--active');
    $('.sale__carousel').css('visibility', 'hidden');
    $('.sale .loading').addClass('loading__on-sale');
    setTimeout(() => {
      $('.sale__carousel').css('visibility', 'visible');
      $('.sale .loading').removeClass('loading__on-sale');
    }, 2000);
  });

  // MENU RESPONSIVE
  $('.header__toggler').on('click', () => {
    event.preventDefault();
    $('#navbarNavAltMarkup').addClass('active');
  });

  $('.header__close').on('click', () => {
    event.preventDefault();
    $('#navbarNavAltMarkup').removeClass('active');
  });
});