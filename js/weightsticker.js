var ws_base_class = '.ws';
var ws_mistakes_class = '.ws-input'; // mistakes are for children ;)
var ws_stripe_class = '.ws-stripe';
var default_stripe_height = '20px';
// TODO: add more colors later
var colors = ['red', 'orange', 'blue', 'purple', 'green', 'magenta', 'yellow', 'grey', 'silver',
'brown', 'maroon'];
$(function() {
	$('.ws').each(function(index, obj) {
		var ws = obj;
		var weights = [];
		var total_value = 0;
		$(ws).children(ws_mistakes_class).each(function(index, obj) {
			weights.push({
				option: $(obj).attr('data-option'),
				value: $(obj).attr('data-value')
			});
			total_value += parseInt( $(obj).attr('data-value') );
		});

		// calculate percentages.
		$(weights).each(function(index, obj) {
			obj['percentage'] = ( obj.value / total_value ) * 100;
			$(ws).append('<div class="ws-stripe "'+
				'style="width:' + obj.percentage + '%;'+
				'background-color:' + colors[index] + ';'+
				'color:' + 'white;' +
				'float:' + 'left;' +
				// 'height: ' + default_stripe_height + ';' +
				'"'+
				'title="' + obj.value + '"'+
				'data-toggle="tooltip"' + 
				'data-placement="top"' +
				'>' + 
				obj.option +
				'</div>');
		});
		$(ws).append('<div class="clear"></div>')
		$('[data-toggle="tooltip"]').tooltip()
		console.log(weights);
	});
});