jQuery(document).ready(function(){
	$('#tabs').tabs().hide();
	$( 'button').button();
	$( '#menu' ).hide();
	$('#datepicker').datepicker().hide();
	$( '#menu' ).menu();
	$('.archivo').click(function(){
		// $('.archivo').

		$( "#menu" ).toggle( "blind" );
	});
	$('.tab_button').click(function(event) {
		$('#tabs').toggle("fade");
	});
	$('.datepicker_button').click(function(event) {
		$('#datepicker').toggle("fade");
	});
	
});