$(function(){
	
	$("#autocomplete-1").autocomplete({

		source:
		[
			{ value:"Foot", url:"injury/foot.html"},
			{ value:"Heel pain", url:"injury/heel.html"},
			{ value:"Forefoot", url:"injury/forefoot.html"},
			{ value:"Midfoot", url:"injury/midfoot.html"},
			{ value:"Toe injuries", url:"injury/toe.html"},
			{ value:"ACL", url:"injury/ACL.html"},
			{ value:"Achilles Tendonitis", url:"injury/achilles.html"},
			{ value:"Achilles Tendon Rupture", url:"injury/achilles.html"},
			{ value:"Adhesive Capsulitis", url:"injury/capsulitis.html"},
			{ value:"Altitude Illness", url:"injury/altitude.html"},
			{ value:"Ankle Anatomy", url:"injury/ankle.html"},
			{ value:"Ankle Sprains", url:"injury/ankleSprains.html"},
			{ value:"Ankle Fractures", url:"injury/ankleFractures.html"},
			{ value:"Ankle Injuries", url:"injury/ankleInjuries.html"},
			{ value:"Anorexia", url:"injury/anorexia.html"},
			{ value:"Cruciate Ligament Injury", url:"injury/cruciate.html"},
			{ value:"Arthritis of the shoulder", url:"injury/arthritis.html"},
			{ value:"Athlete's foot", url:"injury/athlete.html"},
		],

		
		select: function(event,ui){
			window.location=ui.item.url;
		}

		});
});

