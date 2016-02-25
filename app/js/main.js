// аккордеон

$('.accordeon__trigger').on('click', function(e){
  e.preventDefault();

  var
      $this = $(this),
      item = $this.closest('.accordeon__item'),
      list = $this.closest('.accordeon__list'),
      items = list.find('.accordeon__item'),
      content = item.find('.accordeon__inner'),
      otherContent = list.find('.accordeon__inner'),
      duration = 300;

  if (!item.hasClass('active')) {
      items.removeClass('active');
      item.addClass('active');

      otherContent.stop(true, true).slideUp(duration);
      content.stop(true, true).slideDown(duration);

  } else {
      content.stop(true, true).slideUp(duration);
      item.removeClass('active');
        }

});

// переключатель видов меню

$(function(){

	$("#b-catalog").on("click", ".catalog-switch__item", function(){

		var tabs = $("#b-catalog .catalog-switch__item"),
			cont = $("#b-catalog .catalog-content__item");

		// Удаляем классы active
		tabs.removeClass("active");
		cont.removeClass("active");
		// Добавляем классы active
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");

		return false;
	});

});

// слайдер (ползунок)

$(function() {

  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 50000,
    values: [ 100, 13000 ],
    slide: function( event, ui ) {
      $( "#amount-1" ).val( ui.values[ 0 ] );
      $( "#amount-2" ).val( ui.values[ 1 ] );
    }

  });
  $( "#amount-1" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#amount-2" ).val( $( "#slider-range" ).slider( "values", 1 ) );

});

// слайдшоу

$(document).ready(function() {

  $('.slideshow__link ').on('click', function(e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.slideshow__item'),
        container = $this.closest('.b-slideshow'),
        display = container.find('.b-slideshow-main'),
        path = item.find('img').attr('src'),
        duration = 300;

    if(!item.hasClass('active')) {
      item.addClass('active').siblings().removeClass('active');
      display.find('img').fadeOut(duration, function() {
        $(this).attr('src', path).fadeIn(duration);
      })
    }

  });

});

// коломнайзер

$('.b-content-text').columnize({ columns: 2 });

// селект

$('.catalog-switch__select').select2({
  minimumResultsForSearch: Infinity
});

// фильтр - сброс 

$('.reset__btn-filter').click(function (e) {
  e.preventDefault();
	$(':checkbox:checked').removeAttr('checked');
});
