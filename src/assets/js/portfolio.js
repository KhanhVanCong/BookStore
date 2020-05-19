let $grid = $('.portfolio__list').isotope({
  itemSelector: '.portfolio__item',
  masonry: {

  }
});

// bind filter button click
$('.sale__book-list').on( 'click', 'a', function() {
  event.preventDefault();
  let filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});

$('.sale__book-link').click(function() {
  $('.sale__book-link--active').removeClass('sale__book-link--active');
  $( this ).addClass('sale__book-link--active');
});