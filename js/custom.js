var ref = new Firebase("https://artoverflow.firebaseio.com/");

var emailRef = ref.child("emails");

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#email-form").submit(function(event) {
	event.preventDefault();
	var currentEmail = $("input:first").val();
	if (IsEmail(currentEmail) ) {
		emailRef.push({email: currentEmail, timestamp: Date.now()});
		alert("Thank you! Your email has been recorded.");
	}
	else {
		alert("This is not a valid email.");
	}
});