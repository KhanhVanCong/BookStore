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

  $('.js-detail__carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: false,
    draggable: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    prevArrow: '<button type="button" data-role="none" class="slick-arrow arrow-up" aria-label="Previous" tabindex="0" role="button"><i class="arrow_carrot-up"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-arrow arrow-down" aria-label="Next" tabindex="0" role="button"><i class="arrow_carrot-down"></i></button>',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          vertical: false,
          verticalSwiping: false,
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

  // Sub / Plus Input
  $('.modal-product__icon--minus').on('click', () => {
    event.preventDefault();
    const valInput = $('.modal-product__amount').val();
    if (valInput > 0) { $('.modal-product__amount').val(valInput - 1); }
  });

  $('.modal-product__icon--plus').on('click', () => {
    event.preventDefault();
    const valInput = $('.modal-product__amount').val();
    // eslint-disable-next-line radix
    $('.modal-product__amount').val(parseInt(valInput) + 1);
  });

  // Thumb And Magnify Glass
  function setMagnifyImg(dirImg) {
    $('.modal-product__zoom').attr('src', dirImg);
    $('.modal-product__zoom').attr('data-magnify-src', dirImg);
    $('.modal-product__zoom').magnify({
      speed: 200,
      mobileCloseEvent: 'click',
    });
  }

  $('.detail__thumb').each(function () {
    const $this = $(this);
    if ($this.hasClass('detail__thumb--active')) {
      const dirImg = $this.children().attr('src');
      setMagnifyImg(dirImg);
      return false;
    }
    return true;
  });


  // Click Thumb Change Picture In Detail
  $('.detail__thumb').on('click', function () {
    const self = $(this);
    $('.detail__thumb').each(() => {
      const $this = $(this);
      if ($this.hasClass('detail__thumb--active')) {
        $this.removeClass('detail__thumb--active');
        return false;
      }
      return true;
    });
    self.addClass('detail__thumb--active');
    const dirImg = self.children().attr('src');
    setMagnifyImg(dirImg);
  });

  // Show DESC or REVIEW
  function addRemoveDesc(self, classLoop, classActive) {
    $(classLoop).each(function () {
      const $this = $(this);
      if ($this.hasClass(classActive)) {
        $this.removeClass(classActive);
      }
    });
    self.addClass(classActive);
  }

  $('.rate-desc__des').on('click', function () {
    addRemoveDesc($(this), '.rate-desc__title span', 'rate-desc__title--active');
    addRemoveDesc($('.desc__detail'), '.rate-desc--show', 'rate-desc--show');
  });

  $('.rate-desc__review').on('click', function () {
    addRemoveDesc($(this), '.rate-desc__title span', 'rate-desc__title--active');
    addRemoveDesc($('.review__detail'), '.rate-desc--show', 'rate-desc--show');
  });

  // Handle Rating Stars
  $('.review__star').on('click', function () {
    addRemoveDesc($(this), '.review__star', 'active');
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
