jQuery(document).ready(function($){
	$('#menutrigger').click(function(){
		$('.menu>ul').slideToggle();
	});
	
});

 //for menu
$(window).on("load resize scroll",function(e){
	var windowWidth= $(window).width();
	if(windowWidth>728){
		$('.menu>ul').css('display', 'block');
	} else{
		$('.menu>ul').css('display', 'none');
	}
	
	});
	
	
	
	//concat form validate your form field 
	
$('#submitcontact').click(function(e){
	e.preventDefault();
	var error=false;
	
	//validate your name field
	
	var your_name = $('#yourname').val();
	console.log(your_name);
	if(your_name==""){
		error = true;
		$('#yourname').addClass('error-box').removeClass('noerror-box');
	} else{
		$('#yourname').addClass('noerror-box').removeClass('error-box');
	}
	
		//validate your  email

	var your_email = $('#youremail').val();
	console.log(your_email);
	if(your_email!="" && ValidateEmail(your_email)){
		$('#youremail').addClass('noerror-box').removeClass('error-box');
	} else{
		error = true;
		$('#youremail').addClass('error-box').removeClass('noerror-box');
	}
		
			//validate your  subject
	
	var your_subject = $('#yoursubject').val();
	console.log(your_subject);
	if(your_subject==""){
		error = true;
		$('#yoursubject').addClass('error-box').removeClass('noerror-box');
	} else{
		$('#yoursubject').addClass('noerror-box').removeClass('error-box');
	}	
	
				//validate your  message

	var your_message = $('#yourmessage').val();
	console.log(your_message);
	if(your_message==""){
		error = true;
		$('#yourmessage').addClass('error-box').removeClass('noerror-box');
	} else{
		$('#yourmessage').addClass('noerror-box').removeClass('error-box');
	}
	
	if(error == false){ $('#Contact-us').submit(); }
})	
	
	
		function ValidateEmail(mail) 
		{
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
		{
		return (true)
		}
		alert("You have entered an invalid email address!")
		return (false)
		}
	