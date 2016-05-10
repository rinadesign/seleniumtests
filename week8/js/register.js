
	var ref = new Firebase("https://vivid-inferno-6834.firebaseio.com/");
	var authClient = new FirebaseAuthClient(ref, function (error, user) {
    if (error) {
        alert(error);
        return;
    }
    if (user) {
        // User is already logged in.
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
        myUser = user;
        // doLogin(user);
        console.log('logged in')
        
    } else {
        // User is logged out.
        console.log('logged out');   
    }
   });



$(document).ready(function(){
    $('#signup').click(function(){
        var email=$("#username").val();
		var password=$("#password").val();
		console.log(username);
		console.log(password);
		authClient.createUser(email, password, function (error, user) {
             if (!error) {
             	console.log('logging new registered user');
     		}else{
     			alert(error);
     		}
       });              
    });
});