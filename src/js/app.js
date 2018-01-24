
$('.js-drop-menu').hover(function() {
    $(this).find('ul').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('ul').stop(true, true).delay(200).fadeOut(500);
});

var $indicators = $('.swiper__indicators')
var swipe = new Swipe(document.getElementById('swipe'), {
  speed: 500,
  auto: 6000,
  continuous: true,
  disableScroll: false,
  stopPropagation: false,
  callback: function(index, elem) {},
  transitionEnd: function(index, elem) {
    $('.swiper__indicators-item').removeClass('swiper__indicators-item--active')
    $indicators.find('.swiper__indicators-item[data-index="'+ index +'"]')
    .addClass('swiper__indicators-item--active')
  }
});

$('.swiper__indicators-item').on('click', function(){
  var index = $(this).data('index')
  swipe.slide(index)
})

var $swiperIndex = $('.case__swiper-index-box')
var caseSwipe = new Swipe(document.getElementById('case-swiper-container'), {
  speed: 1000,
  auto: 8000,
  continuous: true,
  disableScroll: false,
  stopPropagation: false,
  callback: function(index, elem) {},
  transitionEnd: function(index, elem) {
    $('.case__swiper-index').removeClass('case__swiper-index--active')
    $swiperIndex.find('.case__swiper-index[data-index="'+ index +'"]')
    .addClass('case__swiper-index--active')
  }
});

$swiperIndex.on('click', '.case__swiper-index', function(){
  var index = $(this).data('index')
  caseSwipe.slide(index)
})
