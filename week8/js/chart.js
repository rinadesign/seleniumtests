
$(document).ready(function(){
	var chart1;
	chart1 = new Highcharts.Chart({
		chart:{
			renderTo:'chartContainer',
			type: 'column'
		},
		title:{
			text: 'Coffee Consumption'
		},
		xAxis: {
			categories: ['5/22/15','5/24/15','5/26/15']
		},
		yAxis: {
			title: {text: 'Sets of Treatment'}
		},
		plotOptions: {
    		column: {
       			 stacking: 'normal'
       			}
       	},
		series: [{
			name: 'Friction',
			data: [4,2,4]
		},
		{
			name: 'PRICE',
			data: [8,4,2]
		}]
	});

});
