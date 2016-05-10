$(function(){
	$('#injuryForm').hide();
	$('#ankle').click(function(){
		$('#injuryForm').slideToggle(200);
	});

	//  $('#injuryForm').on('submit', function(e) { //use on if jQuery 1.7+
        
 //        e.preventDefault();  //prevent form from submitting
 //        var firstA = $("#firstQ").val();
 //        var secondA = $("#secondQ").val();
 //        var thirdA = $("#thirdQ").val();
 //        var fourthA = $("#fourthQ").val();
 //        var fifthA = $("#fifthQ").val();
 //        var sixthA = $("#sixthQ").val();
        

 //        // console.log(data); //use the console for debugging, F12 in Chrome, not alerts
 //    });
	//  $('#next').click(function(){
	// 	 //submit the form
	// 	  var firstA = $("#firstQ").val();
	// 	 alert(firstA);

	// });
});


$(function(){
	$("#rightLeg").click(function(){
		location.href='rightLeg.html';
	})
	$("#rightLeg2").click(function(){
		location.href='rightLeg.html';
	})
	$("#next").click(function(){
		location.href='diagnosis.html';
	})
});


function setOrPush(target, val) {
      var result = val;
      if (target) {
        result = [target];
        result.push(val);
      }
      return result;
    }

    function getFormResults(formElement) {
      var formElements = formElement.elements;
      var formParams = {};
      var i = 0;
      var elem = null;
      for (i = 0; i < formElements.length; i += 1) {
        elem = formElements[i];
        switch (elem.type) {
          case 'submit':
            break;
          case 'radio':
            if (elem.checked) {
              formParams[elem.name] = elem.value;
            }
            break;
          case 'checkbox':
            if (elem.checked) {
              formParams[elem.name] = setOrPush(formParams[elem.name], elem.value);
            }
            break;
          default:
            formParams[elem.name] = setOrPush(formParams[elem.name], elem.value);
        }
      }
      return formParams;
    }

    //
    // Boilerplate for running the snippet/form
    //

    function ok() {
      var params = getFormResults(document.getElementById('injuryForm'));
      document.getElementById('results_wrapper').innerHTML = JSON.stringify(params, null, ' ');
    
    }

    (function() {
      var injuryForm = document.getElementById('injuryForm');
      injuryForm.addEventListener('submit', function(event) {
        event.preventDefault();
        ok();
      }, false);
    })();