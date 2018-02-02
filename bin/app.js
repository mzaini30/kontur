jQuery(function(){
	$('.convert').click(function(){

		// deklarasi

		favorable = $('#favorable').val();
		unfavorable = $('#unfavorable').val();
		opsi = $('#opsi').val();
		data = $('#data').val();
		hasil = $('#hasil');

		// mulai

		favorable = favorable.replace(/\n\n/g, ',').replace(/\n/g, ',').replace(/ /g, '');
		favorable = favorable.split(',');
		// for (n in favorable){
		// 	favorable[n] = favorable[n] - 1;
		// }

	});
});