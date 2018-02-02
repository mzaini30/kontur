jQuery(function(){
	$('.convert').click(function(){

		// deklarasi

		favorable = $('#favorable').val();
		unfavorable = $('#unfavorable').val();
		opsi = $('#opsi').val();
		data = $('#data').val();
		hasil = $('#hasil');

		// mulai

		olah_fav_dan_unfav = function(variable){
			var = var.replace(/\n\n/g, ',').replace(/\n/g, ',').replace(/ /g, '');
			var = var.split(',');
			for (n in var){
				var[n]--;
			}
			alert(var);
		}

		olah_fav_dan_unfav(favorable);
		olah_fav_dan_unfav(unfavorable);

	});
});