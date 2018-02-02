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

		for (a in data){
			for (n in blueprint){
				if (opsi.length == 4){
					if (blueprint[n] == 'fav'){
						if (data[a][n] == opsi[0]){
							skoring.push('4');
						} else if (data[a][n] == opsi[1]){
							skoring.push('3');
						} else if (data[a][n] == opsi[2]){
							
						}
					}
				}
			}
		}

	});
});