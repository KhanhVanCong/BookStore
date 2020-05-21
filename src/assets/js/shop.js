function showValue() {
  const arrValue = $('.range-slider').slider("values");
  sessionStorage.setItem('rangeValue', JSON.stringify(arrValue));
  $('#min').text(`$${arrValue[0]}`);
  $('#max').text(`$${arrValue[1]}`);
}

function getValueFromClient() {
  const arrValues = JSON.parse(sessionStorage.getItem('rangeValue'));
  const initValues = arrValues || [16, 815];
  $('.range-slider').slider({range: true, max: 815, min: 16, values: initValues, slide: showValue, change: showValue});
  showValue();
}

getValueFromClient();
$('.product__arrow-icon').click(function() {
  const parentNode = $(this).parent();
  const checkActive = parentNode.hasClass('product__parent--show');
  if(checkActive)
  {
    parentNode.removeClass('product__parent--show');
  } else {
    parentNode.addClass('product__parent--show');
  }
})