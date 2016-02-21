$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 50000,
      values: [ 100, 13000 ],
      slide: function( event, ui ) {
        $( "#amount-1" ).val( "$" + ui.values[ 0 ] );
        $( "#amount-2" ).val( "$" + ui.values[ 1 ] );
      }

    });
    $( "#amount-1" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount-2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
  });
