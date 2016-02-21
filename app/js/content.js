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
