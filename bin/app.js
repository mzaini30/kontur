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
							skoring.push('2');
						} else if (data[a][n] == opsi[3]){
							skoring.push('1');
						}
					} else if (blueprint[n] == 'unfav'){
						if (data[a][n] == opsi[0]){
							skoring.push('1');
						} else if (data[a][n] == opsi[1]){
							skoring.push('2');
						} else if (data[a][n] == opsi[2]){
							skoring.push('3');
						} else if (data[a][n] == opsi[3]){
							skoring.push('4');
						}
					}
				} else if (opsi.length == 5){
					if (blueprint[n] == 'fav'){
						if (data[a][n] == opsi[0]){
							skoring.push('5');
						} else if (data[a][n] == opsi[1]){
							skoring.push('4');
						} else if (data[a][n] == opsi[2]){
							skoring.push('3');
						} else if (data[a][n] == opsi[3]){
							skoring.push('2');
						} else if (data[a][n] == opsi[4]){
							skoring.push('1');
						}
					} else if (blueprint[n] == 'unfav'){
						if (data[a][n] == opsi[0]){
							skoring.push('1');
						} else if (data[a][n] == opsi[1]){
							skoring.push('2');
						} else if (data[a][n] == opsi[2]){
							skoring.push('3');
						} else if (data[a][n] == opsi[3]){
							skoring.push('4');
						} else if (data[a][n] == opsi[4]){
							skoring.push('5');
						}
					}
				}
			}
		}

		skoring = [].concat.apply(skoring);

		calon_hasil = '';
		// for (n in data){
		// 	for (a in blueprint){
		// 		calon_hasil += skoring[n][a];
		// 		calon_hasil += '\t';
		// 	}
		// 	calon_hasil += '\n';
		// }
		calon_hasil += skoring[3];
		hasil.val(calon_hasil);

	});
});