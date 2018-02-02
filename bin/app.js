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
		subyek = data.slice();
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

		// to matrix: skoring

		function listToMatrix(list, elementsPerSubArray) {
		    var matrix = [], i, k;

		    for (i = 0, k = -1; i < list.length; i++) {
		        if (i % elementsPerSubArray === 0) {
		            k++;
		            matrix[k] = [];
		        }

		        matrix[k].push(list[i]);
		    }

		    return matrix;
		}
		skoring = listToMatrix(skoring, blueprint.length)

		calon_hasil = '';
		for (n in data){
			for (a in blueprint){
				calon_hasil += skoring[n][a];
				calon_hasil += '\t';
			}
			calon_hasil += '\n';
		}
		hasil.val(calon_hasil);

	});
});