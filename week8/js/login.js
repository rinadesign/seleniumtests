
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
    $('#signUp').click(function(){
        var email=$("#usernameSign").val();
		var password=$("#passwordSign").val();
		console.log(username);
		console.log(password);
		authClient.createUser(email, password, function (error, user) {
             if (!error) {
             	console.log('logging new registered user');
     		} else{
     			alert(error);
     		}
        window.location.href="logIn.html";
       });              
    });
    $('#signIn').click(function(){
        console.log('trying to login: ' + $("#email").val());
        var email=$("#username").val();
        var password=$("#password").val();
        doLogin(email, password);
        localStorage.setItem("name",email);
        window.location.href="loggedIn.html";        
    });

    function doLogin(email, password) {
        authClient.login('password', {
            email: email,
            password: password
        });

    $('#signOut').click(function(){
        console.log('trying to log out');
        authClient.logout();

    });


};

});