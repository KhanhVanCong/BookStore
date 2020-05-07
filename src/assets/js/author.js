/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
$(document).ready(() => {
  // Disable Loading
  $('.js-loading').removeClass('loading--active');

  // Back to Top
  const btnbackTop = document.getElementById('back-top');

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnbackTop.setAttribute('class', 'back-top--active');
    } else {
      btnbackTop.setAttribute('class', 'back-top--hidden');
    }
  }

  btnbackTop.addEventListener('click', backToTop);
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction(); };

  // Slick
  $('.js-instagram__carousel').slick({
    slidesToShow: 3,
    dot: false,
    arrows: false,
  });

  $('.js-related__carousel').slick({
    slidesToShow: 4,
    dot: false,
    arrows: false,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 2000,
    responsive: [
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

  // MENU RESPONSIVE
  $('.header__toggler').on('click', () => {
    event.preventDefault();
    $('#navbarNavAltMarkup').addClass('active');
  });

  $('.header__close').on('click', () => {
    event.preventDefault();
    $('#navbarNavAltMarkup').removeClass('active');
  });

  // WISH LIST
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

  // BOOK CART
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

  $('.books__cart').on('click', function () {
    event.preventDefault();
    const $this = $(this);
    loadingAnimation($this, 'fa fa-spinner fa-spin', 'icon_check', 1000, false);
  });

  // QUICK VIEW
  $('.books__quick-view').on('click', function () {
    event.preventDefault();
    const $this = $(this);
    loadingAnimation($this, 'fa fa-spinner fa-spin', 'icon_search', 1000, true);
  });
});