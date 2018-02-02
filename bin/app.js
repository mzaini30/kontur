jQuery(function(){
	$('.convert').click(function(){

		// deklarasi

		favorable = $('#favorable').val();
		unfavorable = $('#unfavorable').val();
		opsi = $('#opsi').val();
		data = $('#data').val();
		hasil = $('#hasil');

		// mulai

		olah_fav_dan_unfav = function(variabel){
			variabel = variabel.replace(/\n\n/g, ',').replace(/\n/g, ',').replace(/ /g, '');
			variabel = variabel.split(',');
			for (n in variabel){
				variabel[n]--;
			}
		}

		olah_fav_dan_unfav(favorable);
		olah_fav_dan_unfav(unfavorable);

		blueprint = [];
		for (n in favorable){
			blueprint[n] = 'fav';
		}
		for (n in unfavorable){
			blueprint[n] = 'unfav';
		}

		data = data.split('\n');
		for (n in data){
			data[n] = data[n].split('\t');
		}

		opsi = opsi.split('\n');

		skoring = [];

		for (n in data){
			for (u in blueprint){
				if (opsi.length == 4){
					
				}
			}
		}

	});
});