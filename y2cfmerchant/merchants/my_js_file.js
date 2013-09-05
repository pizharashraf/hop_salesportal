$(document).ready(function () {


	//var newmsg = '<span><img src="http://localhost/salesportaloffercsv/sites/all/themes/y2cfprod/images/OK.png" width="20px" height="20px" /></span>';
	//var newmsg = '<span><img src="http://124.153.106.166/salesportaloffer/sites/all/themes/y2cfprod/images/OK.png" width="20px" height="20px" /></span>';
	var newmsg = '<span><img src="http://124.153.106.166/salesportal/sites/all/themes/y2cfprod/images/OK.png" width="20px" height="20px" /></span>';

//DSR  Outlet contact number
	$("#edit-field-dst-outlet-cn-0-number").keyup(function(){
		var outletconum = $("#edit-field-dst-outlet-cn-0-number");
		var x = $("#edit-field-dst-outlet-cn-0-number").val();
		var mobile_no = $("#edit-field-dst-outlet-cn-0-number").val().length;
		if (isNaN(x)||x.indexOf(" ")!=-1 && mobile_no < 10) {
			alert("Only numbers allowed");

			outletconum.focus(function(){
				outletconum.css("background-color","#FFFFCC");
			});
			$("#edit-field-dst-outlet-cn-0-number").focus();
			return false;
        }

	});

//DSR  Email
	$("#edit-field-dsr-email-0-email").blur(function(){
	  var emailaddressVal = $("#edit-field-dsr-email-0-email").val();
	  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if(emailaddressVal != '' && !emailReg.test(emailaddressVal)) {
				alert("Email should not be in format");
				//$("#call_error").html("Digits Only").show();
				return false;
			}
		});
//DSR  contact person contact number
		$("#edit-field-dsr-contact-no-0-number").blur(function(){
			var x = $("#edit-field-dsr-contact-no-0-number").val();
			var mobile_no = $("#edit-field-dsr-contact-no-0-number").val().length;
			if ((mobile_no !='' && mobile_no < 10) || isNaN(x)||x.indexOf(" ")!=-1) {
				alert("Contact number should be mobile number");
				//$("#call_error").html("Digits Only").show();
				return false;
			}
		});
//ADD OFFERS  Head office
	var headoffice = $("#edit-field-hop-out-head-office-0-value");
	headoffice.blur(function(){
	$('#edit-field-hop-out-head-office-0-value-wrapper').append('<span id="headofficemsg"></span>');
	var msg = '<span style="color:red;">Head office required</span>';
	var x = headoffice.val();
	if (x.length == 0) {
		$("#headofficemsg").html(msg).show();
		alert('Head office required');
		headoffice.focus(function(){
			headoffice.css("background-color","#FFFFCC");
		});
		headoffice.focus();
		return false;
	  }else{
		 $("#headofficemsg").html(msg).hide();
		 $("#headofficemsg").html(newmsg).show();
		 headoffice.css("background-color","#D6D6FF");
	}
});
//first name
	var firstname = $("#edit-field-merchant-f-name-0-value");
	firstname.blur(function(){
	$('#edit-field-merchant-f-name-0-value-wrapper').append('<span id="firstnamemsg"></span>');
	var msg = '<span style="color:red;">First name required</span>';
	var x = firstname.val();
	if (x.length == 0) {
		$("#firstnamemsg").html(msg).show();
		alert('First name required');
		firstname.focus(function(){
			firstname.css("background-color","#FFFFCC");
		});
		firstname.focus();
		return false;
	  }else{
		 $("#firstnamemsg").html(msg).hide();
		 $("#firstnamemsg").html(newmsg).show();
		 firstname.css("background-color","#D6D6FF");
	}
});
//last name
	var lastname = $("#edit-field-merchant-last-name-0-value");
	lastname.blur(function(){
	$('#edit-field-merchant-last-name-0-value-wrapper').append('<span id="lastnamemsg"></span>');
	var msg = '<span style="color:red;">Last name required</span>';
	var x = lastname.val();
	if (x.length == 0) {
		$("#lastnamemsg").html(msg).show();
		alert('Last name required');
		lastname.focus(function(){
			lastname.css("background-color","#FFFFCC");
		});
		lastname.focus();
		return false;
	  }else{
		 $("#lastnamemsg").html(msg).hide();
		 $("#lastnamemsg").html(newmsg).show();
		 lastname.css("background-color","#D6D6FF");
	}
});
//Designation
	var sigdesignation = $("#edit-field-hop-sig-designation-0-value");
	sigdesignation.blur(function(){
	$('#edit-field-hop-sig-designation-0-value-wrapper').append('<span id="sigdesignationmsg"></span>');
	var msg = '<span style="color:red;">Designation required</span>';

	var x = sigdesignation.val();

	if (x.length == 0) {
		$("#sigdesignationmsg").html(msg).show();
		alert('Designation required');
		sigdesignation.focus(function(){
			sigdesignation.css("background-color","#FFFFCC");
		});
		sigdesignation.focus();
		return false;
	  }else{
		 $("#sigdesignationmsg").html(msg).hide();
		 $("#sigdesignationmsg").html(newmsg).show();
		 sigdesignation.css("background-color","#D6D6FF");
	}
});
//Merchant type
	var merchanttype = $("#edit-field-hop-merch-type-value");
	merchanttype.blur(function(){
	$('#edit-field-hop-merch-type-value-wrapper').append('<span id="merchanttypemsg"></span>');
	var msg = '<span style="color:red;">Merchant type required</span>';
	var x = merchanttype.val();
	if (x.length == 0) {
		$("#merchanttypemsg").html(msg).show();
		alert('Merchant type required');
		merchanttype.focus(function(){
			merchanttype.css("background-color","#FFFFCC");
		});
		merchanttype.focus();
		return false;
	  }else{
		 $("#merchanttypemsg").html(msg).hide();
		 $("#merchanttypemsg").html(newmsg).show();
		 merchanttype.css("background-color","#D6D6FF");
	}
});
//checkin 1
	var checkin1 = $("#edit-field-hopper-checkin1-0-value");
	checkin1.blur(function(){
	$('#edit-field-hopper-checkin1-0-value-wrapper').append('<span id="checkin1msg"></span>');
	var msg = '<span style="color:red;">Merchant type required</span>';
	var x = checkin1.val();
	if (x.length == 0) {
		$("#checkin1msg").html(msg).show();
		alert('Checkin 1 required');
		checkin1.focus(function(){
			checkin1.css("background-color","#FFFFCC");
		});
		checkin1.focus();
		return false;
	  }else{
		 $("#checkin1msg").html(msg).hide();
		 $("#checkin1msg").html(newmsg).show();
		 checkin1.css("background-color","#D6D6FF");
	}
});
//cost of each item
	var costofitem = $("#edit-field-hop-cost-ser-inclu-0-value");
	costofitem.blur(function(){
	$('#edit-field-hop-cost-ser-inclu-0-value-wrapper').append('<span id="costofitemmsg"></span>');
	var validmsg = 'Cost of each item for the services included required';
	var msg = '<span style="color:red;">'+validmsg+'</span>';

	var x = costofitem.val();

	if (x.length == 0) {
		$("#costofitemmsg").html(msg).show();
		alert(validmsg);
		costofitem.focus(function(){
			costofitem.css("background-color","#FFFFCC");
		});
		costofitem.focus();
		return false;
	  }else{
		 $("#costofitemmsg").html(msg).hide();
		 $("#costofitemmsg").html(newmsg).show();
		 costofitem.css("background-color","#D6D6FF");
	}
});
//duration of service
	var durationofservices = $("#edit-field-hop-dur-each-ser-0-value");
	durationofservices.blur(function(){
	$('#edit-field-hop-dur-each-ser-0-value-wrapper').append('<span id="durationofservicesmsg"></span>');
	var validmsg = 'Duration of each of the services required';
	var msg = '<span style="color:red;">'+validmsg+'</span>';

	var x = durationofservices.val();

	if (x.length == 0) {
		$("#durationofservicesmsg").html(msg).show();
		alert(validmsg);
		durationofservices.focus(function(){
			durationofservices.css("background-color","#FFFFCC");
		});
		durationofservices.focus();
		return false;
	  }else{
		 $("#durationofservicesmsg").html(msg).hide();
		 $("#durationofservicesmsg").html(newmsg).show();
		 durationofservices.css("background-color","#D6D6FF");
	}
});
//highlights 1
	var fineprint4 = $("#edit-field-other-fine-point-one-0-value");
	fineprint4.blur(function(){
	$('#edit-field-other-fine-point-one-0-value-wrapper').append('<span id="fineprint4msg"></span>');
	var validmsg = 'Fine print 4 required';
	var msg = '<span style="color:red;">'+validmsg+'</span>';

	var x = fineprint4.val();

	if (x.length == 0) {
		$("#fineprint4msg").html(msg).show();
		alert(validmsg);
		fineprint4.focus(function(){
			fineprint4.css("background-color","#FFFFCC");
		});
		fineprint4.focus();
		return false;
	  }else{
		 $("#fineprint4msg").html(msg).hide();
		 $("#fineprint4msg").html(newmsg).show();
		 fineprint4.css("background-color","#D6D6FF");
	}
});
//Number of participating outlet  edit-field-hop-no-parti-outlet-0-value
	var partioutlets = $("#edit-field-hop-no-parti-outlet-0-value");
	partioutlets.keyup(function(){
		var x = partioutlets.val();
		$('#edit-field-hop-no-parti-outlet-0-value-wrapper').append('<span id="partioutletmsg" style="position:relative;float: right; margin-right: 66%;margin-top:-5%;"></span>');
		var msg = '<span style="color:red;">Number of participating outlet should be numeric (e.g: 25 )</span>';
			if (isNaN(x)||x.indexOf(" ")!=-1) {
				$("#partioutletmsg").html(msg).show();
				alert("Number of participating outlet should be numeric (e.g: 25 )");

				partioutlets.focus(function(){
				partioutlets.css("background-color","#FFFFCC");
			});
				partioutlets.focus();

				return false;
			}else{
			  $("#partioutletmsg").html(msg).hide();
			}
		});

partioutlets.blur(function(){
		var x = partioutlets.val();
		$('#edit-field-hop-no-parti-outlet-0-value-wrapper').append('<span id="partioutletmsg"></span>');
		var msg = '<span style="color:red;">Number of participating outlet should be numeric (e.g: 25 )</span>';
			if (x.length == 0) {
				$("#partioutletmsg").html(msg).show();
				alert("Number of participating outlet should be numeric (e.g: 25 )");

				partioutlets.focus(function(){
				partioutlets.css("background-color","#FFFFCC");
			});
				partioutlets.focus();

				return false;
			}else{
			  $("#partioutletmsg").html(msg).hide();
			  $("#partioutletmsg").html(newmsg).show();
			  partioutlets.css("background-color","#D6D6FF");
			}
		});
//Number of participating Cities  edit-field-hop-no-parti-outlet-0-value
	var partici_cities = $("#edit-field-hop-no-part-cities-0-value");
	partici_cities.keyup(function(){
			var x = partici_cities.val();
			$('#edit-field-hop-no-part-cities-0-value-wrapper').append('<span id="particitesmsg" style="position:relative;float: right; margin-right: 66%;margin-top:-5%;"></span>');
			var msg = '<span style="color:red;">Number of participating cities should be numeric (e.g: 25 )</span>';

			if (isNaN(x)||x.indexOf(" ")!=-1) {
				$("#particitesmsg").html(msg).show();
				alert("Number of participating cities should be numeric (e.g: 25 )");
				partici_cities.focus(function(){
				partici_cities.css("background-color","#FFFFCC");
			});
				partici_cities.focus();
				return false;
			}else{
			  $("#particitesmsg").html(msg).hide();
			}
	});

partici_cities.blur(function(){
			var x = partici_cities.val();
			$('#edit-field-hop-no-part-cities-0-value-wrapper').append('<span id="particitesmsg"></span>');
			var msg = '<span style="color:red;">Number of participating cities should be numeric (e.g: 25 )</span>';

			if (x.length == 0) {
				$("#particitesmsg").html(msg).show();
				alert("Number of participating cities should be numeric (e.g: 25 )");
				partici_cities.focus(function(){
				partici_cities.css("background-color","#FFFFCC");
			});
				partici_cities.focus();
				return false;
			}else{
			  $("#particitesmsg").html(msg).hide();
			  $("#particitesmsg").html(newmsg).show();
			  partici_cities.css("background-color","#D6D6FF");
			}
	});
//Signatory's Mobile Number: *  edit-field-mer-auth-mobile-no-0-number
	var merchantmobile = $("#edit-field-mer-auth-mobile-no-0-number");
	merchantmobile.keyup(function(){
	var x = merchantmobile.val();
	$('#edit-field-mer-auth-mobile-no-0-number-wrapper').append('<span id="merchantmobilemsg"></span>');
	var msg = '<span style="color:red;">Signatory Mobile Number should be numeric (e.g: 9999998765 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#merchantmobilemsg").html(msg).show();
		alert("Signatory Mobile Number should be numeric (e.g: 9999998765 )");
		merchantmobile.focus(function(){
			merchantmobile.css("background-color","#FFFFCC");
		});
		merchantmobile.focus();
		return false;
        }else if(x.length !=0) {
		  $("#merchantmobilemsg").html(msg).hide();
		  $("#merchantmobilemsg").html(newmsg).show();

		 }else{
		  $("#merchantmobilemsg").html(msg).hide();

		}
});
merchantmobile.blur(function(){
	var x = merchantmobile.val();
	$('#edit-field-mer-auth-mobile-no-0-number-wrapper').append('<span id="merchantmobilemsg"></span>');
	var msg = '<span style="color:red;">Signatory Mobile Number should be numeric (e.g: 9999998765 )</span>';
	if (x.length == 0) {
		$("#merchantmobilemsg").html(msg).show();
		alert("Signatory Mobile Number should be numeric (e.g: 9999998765 )");
		merchantmobile.focus(function(){
			merchantmobile.css("background-color","#FFFFCC");
		});
		merchantmobile.focus();
		return false;
        }else  {
		  $("#merchantmobilemsg").html(msg).hide();
		  $("#merchantmobilemsg").html(newmsg).show();
			merchantmobile.css("background-color","#D6D6FF");
		 }
});
//landline number   edit-field-merchant-ll-number-0-number
	var outletconum = $("#edit-field-merchant-ll-number-0-number");
	outletconum.keyup(function(){
	var x = $("#edit-field-merchant-ll-number-0-number").val();

		$('#edit-field-merchant-ll-number-0-number-wrapper').append('<span id="landlinemsg"></span>');
			var msg = '<span style="color:red;">Signatory Landline number should be numeric (e.g: 9999998765 )</span>';

		if (isNaN(x)||x.indexOf(" ")!=-1) {
			$("#landlinemsg").html(msg).show();
			alert("Signatory Landline number should be numeric (e.g: 011222222298 )");

			outletconum.focus(function(){
				outletconum.css("background-color","#FFFFCC");
			});
			outletconum.focus();
			return false;
        } else {
		  $("#landlinemsg").html(msg).hide();
		}
	});

outletconum.blur(function(){
	var x = outletconum.val();
	if(x.length !=0) {
		$("#landlinemsg").html(newmsg).show();
		outletconum.css("background-color","#D6D6FF");
	}
});
//Email ID  edit-field-merchant-email-id-0-email
	var merchantemail = $("#edit-field-merchant-email-id-0-email");
	merchantemail.blur(function(){
	var emailaddressVal = merchantemail.val();
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	$('#edit-field-merchant-email-id-0-email-wrapper').append('<span id="merchantemailmsg"></span>');
	var msg = '<span style="color:red;">Email should be in format (e.g: xyz@gmail.com )</span>';

			if(emailaddressVal.length == 0 || !emailReg.test(emailaddressVal)) {
				$("#merchantemailmsg").html(msg).show();
				alert("Email should be in format (e.g: xyz@gmail.com )");

				merchantemail.focus(function(){
				merchantemail.css("background-color","#FFFFCC");
			});
			merchantemail.focus();
				return false;
			}else if(emailaddressVal.length !=0) {
		  $("#merchantemailmsg").html(msg).hide();
		  $("#merchantemailmsg").html(newmsg).show();
		  merchantemail.css("background-color","#D6D6FF");
		 }else{
			  $("#merchantemailmsg").html(msg).hide();

			}


	});
//Alt email ID   edit-field-mer-alt-email-id-0-email
	var alt_email_hopprs = $("#edit-field-mer-alt-email-id-0-email");
	alt_email_hopprs.blur(function(){
	var emailaddressVal = alt_email_hopprs.val();
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	$('#edit-field-mer-alt-email-id-0-email-wrapper').append('<span id="altemailidmsg"></span>');
	var msg = '<span style="color:red;">Signatory Alternative Email should be in format (e.g: xyz@gmail.com )</span>';

			if(emailaddressVal != '' && !emailReg.test(emailaddressVal)) {
				$("#altemailidmsg").html(msg).show();
				alert("Signatory Alternative Email should be in format (e.g: xyz@gmail.com )");
				alt_email_hopprs.focus(function(){
				alt_email_hopprs.css("background-color","#FFFFCC");
			});
			alt_email_hopprs.focus();

				return false;
			}else{
			  $("#altemailidmsg").html(msg).hide();
			}


	});
//Actual price   edit-field-merchant-offer-price-0-value
	var actualproceoff = $("#edit-field-merchant-offer-price-0-value");
	actualproceoff.keyup(function(){
	var x = $("#edit-field-merchant-offer-price-0-value").val();
	$('#edit-field-merchant-offer-price-0-value-wrapper').append('<span id="actualpricemsg"></span>');
	var msg = '<span style="color:red;">Actual price should be numeric  (e.g: 25987 )</span>';

	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#actualpricemsg").html(msg).show();
		alert("Actual price should be numeric  (e.g: 25987 )");
		actualproceoff.focus(function(){
		actualproceoff.css("background-color","#FFFFCC");
		});
		actualproceoff.focus();
		return false;
        }else if(x.length !=0) {
		  $("#actualpricemsg").html(msg).hide();
		  $("#actualpricemsg").html(newmsg).show();
		}else{
		  $("#actualpricemsg").html(msg).hide();
		  //$("#actualpricemsg").html("Please enter actual price").show();
		}

	});
//offer price  edit-field-mer-offer-price-0-value  edit-field-mer-offer-price-0-value-wrapper
	var offerpriceval = $("#edit-field-mer-offer-price-0-value");
	offerpriceval.keyup(function(){
	var x = offerpriceval.val();
	$('#edit-field-mer-offer-price-0-value-wrapper').append('<span id="offerpricevalmsg"></span>');
	var msg = '<span style="color:red;">Offer price should be numeric  (e.g: 25987 )</span>';

		if (isNaN(x)||x.indexOf(" ")!=-1) {
			$("#offerpricevalmsg").html(msg).show();
			alert("Offer price should be numeric (e.g: 25987 )");

			offerpriceval.focus(function(){
				offerpriceval.css("background-color","#FFFFCC");
			});
			offerpriceval.focus();
			return false;
        }else if(x.length !=0) {
		  $("#offerpricevalmsg").html(msg).hide();
		  $("#offerpricevalmsg").html(newmsg).show();
		}else{
		  $("#offerpricevalmsg").html(msg).hide();
		 }

	});
//Discount edit-field-offer-discount-0-value  edit-field-offer-discount-0-value-wrapper
	var discountsper = $("#edit-field-offer-discount-0-value");
	discountsper.keyup(function(){

		var x = discountsper.val();

		$('#edit-field-offer-discount-0-value-wrapper').append('<span id="discountspermsg"></span>');
		var msg = '<span style="color:red;">Discount percent should be numeric  (e.g: 25987 )</span>';

		if (isNaN(x)||x.indexOf(" ")!=-1) {
			$("#discountspermsg").html(msg).show();
			alert("Discount percent should be numeric (e.g: 25987 )");

			discountsper.focus(function(){
			discountsper.css("background-color","#FFFFCC");
			});
			discountsper.focus();
			return false;
        }else if(x.length !=0) {
		  $("#discountspermsg").html(msg).hide();
		  $("#discountspermsg").html(newmsg).show();
		}else{
			$("#discountspermsg").html(msg).hide();
		}

	});
//Marketinf fee   edit-field-mer-marketing-fee-0-value  edit-field-mer-marketing-fee-0-value-wrapper
	var marketingfees = $("#edit-field-mer-marketing-fee-0-value");
	marketingfees.keyup(function(){

		var x = marketingfees.val();

		$('#edit-field-mer-marketing-fee-0-value-wrapper').append('<span id="marketingfeesmsg"></span>');
		var msg = '<span style="color:red;">Offer price should be numeric  (e.g: 25987 )</span>';

		if (isNaN(x)||x.indexOf(" ")!=-1) {
			$("#marketingfeesmsg").html(msg).show();
			alert("Marketing fee should be numeric (e.g: 25987 )");

			marketingfees.focus(function(){
				marketingfees.css("background-color","#FFFFCC");
			});
			marketingfees.focus();
			return false;
        }else if(x.length !=0) {
		  $("#marketingfeesmsg").html(msg).hide();
		  $("#marketingfeesmsg").html(newmsg).show();
		}else{
			$("#marketingfeesmsg").html(msg).hide();
		}

	});


//website address   edit-field-mer-website-add-0-url
	var websiteurlname = $("#edit-field-mer-website-add-0-url");
	websiteurlname.blur(function(){
	var weblen  = websiteurlname.val().length;
	if(weblen > 0 ) {
	  var websiteurl = $("#edit-field-mer-website-add-0-url").val();
	  var websiteurl_hopprs = $("#edit-field-mer-website-add-0-url");
	  var re = /^{0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;


			if(!(/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(websiteurl))) {

				alert("Website URL should be in format (e.g: http://www.mycompany.com)");
				websiteurl_hopprs.focus(function(){
				websiteurl_hopprs.css("background-color","#FFFFCC");
			});
			websiteurl_hopprs.focus();

				return false;
			}
		}
});
//Facebook url validation
var facebookwebsiteurlname = $("#edit-field-hop-mer-facebook-0-url");
$("#edit-field-hop-mer-facebook-0-url").blur(function(){
	var faceweblen  = facebookwebsiteurlname.val().length;
	if(faceweblen > 0 ) {
	  var facebookurl = $("#edit-field-hop-mer-facebook-0-url").val();
	  var facebookurl_hopprs = $("#edit-field-hop-mer-facebook-0-url");

			if(!(/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(facebookurl))) {

				alert("Facebook URL should be in format (e.g: http://www.facebook.com/mytweets )");
				facebookurl_hopprs.focus(function(){
				facebookurl_hopprs.css("background-color","#FFFFCC");
			});
			facebookurl_hopprs.focus();

				return false;
			}
		}
});
//Twitter url validation
	var twitterwebsiteurlname = $("#edit-field-hop-mer-twitter-url-0-url")
	$("#edit-field-hop-mer-twitter-url-0-url").blur(function(){
	var tweetweblen  = twitterwebsiteurlname.val().length;
	if(tweetweblen > 0 ) {
	  var twitterurl = $("#edit-field-hop-mer-twitter-url-0-url").val();
	  var twitterurl_hopprs = $("#edit-field-hop-mer-twitter-url-0-url");

			if(!(/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(twitterurl))) {

				alert("Twitter URL should be in format(e.g: http://www.twitter.com/mytweets )");
				twitterurl_hopprs.focus(function(){
				twitterurl_hopprs.css("background-color","#FFFFCC");
			});
			twitterurl_hopprs.focus();

				return false;
			}
	}

});
//*******************************	MERCHANT OUTLET		*******************************

//contact person
	var contact_person = $("#edit-field-mo-hop-contact-person-0-value");
	contact_person.blur(function(){
	$('#edit-field-mo-hop-contact-person-0-value-wrapper').append('<span id="contact_personmsg"></span>');
	var msg = '<span style="color:red;">contact person name required</span>';
	var x = contact_person.val();
	if (x.length == 0) {
		$("#contact_personmsg").html(msg).show();
		alert('contact person name required');
		contact_person.focus(function(){
			contact_person.css("background-color","#FFFFCC");
		});
		contact_person.focus();
		return false;
	  }else{
		 $("#contact_personmsg").html(msg).hide();
		 $("#contact_personmsg").html(newmsg).show();
		 contact_person.css("background-color","#D6D6FF");
	}
});
//designation
	var cpdesignation = $("#edit-field-mo-hop-cp-designation-0-value");
	cpdesignation.blur(function(){
	$('#edit-field-mo-hop-cp-designation-0-value-wrapper').append('<span id="cpdesignationmsg"></span>');
	var msg = '<span style="color:red;">contact person designation required</span>';
	var x = cpdesignation.val();
	if (x.length == 0) {
		$("cpdesignationmsg").html(msg).show();
		alert('contact person designation required');
		cpdesignation.focus(function(){
			cpdesignation.css("background-color","#FFFFCC");
		});
		cpdesignation.focus();
		return false;
	  }else{
		 $("#cpdesignationmsg").html(msg).hide();
		 $("#cpdesignationmsg").html(newmsg).show();
		 cpdesignation.css("background-color","#D6D6FF");
	}
});
//operating timing
	var operationtimings = $("#edit-field-mo-oprational-timings-0-value");
	operationtimings.blur(function(){
	$('#edit-field-mo-oprational-timings-0-value-wrapper').append('<span id="operationtimingsmsg"></span>');
	var msg = '<span style="color:red;">operation timings required</span>';
	var x = operationtimings.val();
	if (x.length == 0) {
		$("#operationtimingsmsg").html(msg).show();
		alert('operation timings required');
		operationtimings.focus(function(){
			operationtimings.css("background-color","#FFFFCC");
		});
		operationtimings.focus();
		return false;
	  }else{
		 $("#operationtimingsmsg").html(msg).hide();
		 $("#operationtimingsmsg").html(newmsg).show();
		 operationtimings.css("background-color","#D6D6FF");
	}
});
//holidays
var holidays = $("#edit-field-mo-holidays-0-value");
holidays.blur(function(){
	$('#edit-field-mo-holidays-0-value-wrapper').append('<span id="holidaysmsg"></span>');
	var msg = '<span style="color:red;">Holidays required</span>';

	var x = holidays.val();

	if (x.length == 0) {
		$("#holidaysmsg").html(msg).show();
		alert('Holidays required');
		holidays.focus(function(){
			holidays.css("background-color","#FFFFCC");
		});
		holidays.focus();
		return false;
	  }else{
		 $("#holidaysmsg").html(msg).hide();
		 $("#holidaysmsg").html(newmsg).show();
		 holidays.css("background-color","#D6D6FF");
	}
});
//all mobile numbers should not blank
	var address1 = $("#edit-field-mo-loc-address-1-0-value");
	address1.blur(function(){
	$('#edit-field-mo-loc-address-1-0-value-wrapper').append('<span id="address1msg"></span>');
	var msg = '<span style="color:red;">Please enter Address 1</span>';

	var x = address1.val();
	if (x.length == 0) {
		$("#address1msg").html(msg).show();
		alert('Please enter Address 1');
		address1.focus(function(){
			address1.css("background-color","#FFFFCC");
		});
		address1.focus();
		return false;
	  }else{
		 $("#address1msg").html(msg).hide();
		 $("#address1msg").html(newmsg).show();
		 address1.css("background-color","#D6D6FF");
	}
});
//Address 2 
var address2 = $("#edit-field-mo-loc-address-2-0-value");
address2.blur(function(){
	$('#edit-field-mo-loc-address-2-0-value-wrapper').append('<span id="address2msg"></span>');
	var msg = '<span style="color:red;">Please enter Address 2</span>';

	var x = address2.val();
	if (x.length == 0) {
		$("#address2msg").html(msg).show();
		alert('Please enter Address 2');
		address2.focus(function(){
			address2.css("background-color","#FFFFCC");
		});
		address2.focus();
		return false;
	  }else{
		 $("#address2msg").html(msg).hide();
		 $("#address2msg").html(newmsg).show();
		 address2.css("background-color","#D6D6FF");
	}
});



//landmark 1 
var landmark1 = $("#edit-field-mo-loc-landmark-0-value");
landmark1.blur(function(){
	$('#edit-field-mo-loc-landmark-0-value-wrapper').append('<span id="landmark1msg"></span>');
	var msg = '<span style="color:red;">Please enter Landmark 1</span>';

	var x = landmark1.val();
	if (x.length == 0) {
		$("#landmark1msg").html(msg).show();
		alert('Please enter Landmark 1');
		landmark1.focus(function(){
			landmark1.css("background-color","#FFFFCC");
		});
		landmark1.focus();
		return false;
	  }else{
		 $("#landmark1msg").html(msg).hide();
		 $("#landmark1msg").html(newmsg).show();
		 landmark1.css("background-color","#D6D6FF");
	}
});


//lanmark 2 
var landmark2 = $("#edit-field-mo-landmark2-0-value");
landmark2.blur(function(){
	$('#edit-field-mo-landmark2-0-value-wrapper').append('<span id="landmark2msg"></span>');
	var msg = '<span style="color:red;">Please enter Landmark 2</span>';

	var x = landmark2.val();
	if (x.length == 0) {
		$("#landmark2msg").html(msg).show();
		alert('Please enter Landmark 2');
		landmark2.focus(function(){
			landmark2.css("background-color","#FFFFCC");
		});
		landmark2.focus();
		return false;
	  }else{
		 $("#landmark2msg").html(msg).hide();
		 $("#landmark2msg").html(newmsg).show();
		 landmark2.css("background-color","#D6D6FF");
	}
});
//zip code validation   
	var zipcode = $("#edit-field-mo-hop-zipcode-0-value");
	zipcode.keyup(function(){
	var x = zipcode.val();
	$('#edit-field-mo-hop-zipcode-0-value-wrapper').append('<span id="zipmsg"></span>');
	var msg = '<span style="color:red;">zip code should be numeric</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#zipmsg").html(msg).show();
		alert('zip code should be numeric	');
		zipcode.focus(function(){
			zipcode.css("background-color","#FFFFCC");
		});
		zipcode.focus();
		return false;
        }else if(x.length !=0) {
		  $("#zipmsg").html(msg).hide();
		  $("#zipmsg").html(newmsg).show();
		 }else{
		  $("#zipmsg").html(msg).hide();

		}

	});

	zipcode.blur(function(){
	var x = zipcode.val();
	$('#edit-field-mo-hop-zipcode-0-value-wrapper').append('<span id="zipmsg2"></span>');
	var msg = '<span style="color:red;">Please enter Zip code</span>';
	if (x.length == 0) {
		$("#zipmsg2").html(msg).show();
		alert('Please enter Zip code');
		zipcode.focus(function(){
			zipcode.css("background-color","#FFFFCC");
		});
		zipcode.focus();
		return false;
        }else{
		  $("#zipmsg2").html(msg).hide();
		  zipcode.css("background-color","#D6D6FF");
		}

	});



//email ID validation
var outletcoemail = $("#edit-field-mo-hop-cp-emailid-0-email");
	outletcoemail.blur(function(){
	var emailaddressVal = outletcoemail.val();
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	$('#edit-field-mo-hop-cp-emailid-0-email-wrapper').append('<span id="outletcoemailmsg"></span>');
	var msg = '<span style="color:red;">Email should be in format (e.g: xyz@gmail.com )</span>';

			if(emailaddressVal.length == 0 || !emailReg.test(emailaddressVal)) {
				$("#outletcoemailmsg").html(msg).show();
				alert("Email should be in format (e.g: xyz@gmail.com )");

				outletcoemail.focus(function(){
				outletcoemail.css("background-color","#FFFFCC");
			});
			outletcoemail.focus();
				return false;
			}else if(emailaddressVal.length !=0) {
		  $("#outletcoemailmsg").html(msg).hide();
		  $("#outletcoemailmsg").html(newmsg).show();
		  outletcoemail.css("background-color","#D6D6FF");
		 }else{
			  $("#outletcoemailmsg").html(msg).hide();

			}


	});

//Contact person mobile number
var cpmobile = $("#edit-field-con-per-mon-mo-0-number");
cpmobile.keyup(function(){
	var x = cpmobile.val();
	$('#edit-field-con-per-mon-mo-0-number-wrapper').append('<span id="cpmobilemsg"></span>');
	var msg = '<span style="color:red;">Contact person Mobile Number should be numeric (e.g: 9999998765 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#cpmobilemsg").html(msg).show();
		alert("Contact person Mobile Number should be numeric (e.g: 9999998765 )");
		cpmobile.focus(function(){
			cpmobile.css("background-color","#FFFFCC");
		});
		cpmobile.focus();
		return false;
        }else if(x.length !=0) {
		  $("#cpmobilemsg").html(msg).hide();
		  $("#cpmobilemsg").html(newmsg).show();

		 }else{
		  $("#cpmobilemsg").html(msg).hide();

		}
});

cpmobile.blur(function(){
	var x = cpmobile.val();
	$('#edit-field-con-per-mon-mo-0-number-wrapper').append('<span id="cpmobilemsg"></span>');
	var msg = '<span style="color:red;">Contact person Mobile Number should be numeric (e.g: 9999998765 )</span>';
	if (x.length == 0) {
		$("#cpmobilemsg").html(msg).show();
		alert("Contact person Mobile Number should be numeric (e.g: 9999998765 )");
		cpmobile.focus(function(){
			cpmobile.css("background-color","#FFFFCC");
		});
		cpmobile.focus();
		return false;
        }else  {
		  $("#cpmobilemsg").html(msg).hide();
		  $("#cpmobilemsg").html(newmsg).show();

		 }
});

//cp alt mobile no
var cpaltmobile = $("#edit-field-hop-con-per-alt-mobno-0-number");
cpaltmobile.keyup(function(){
	var x = cpaltmobile.val();
	$('#edit-field-hop-con-per-alt-mobno-0-number-wrapper').append('<span id="cpaltmobilemsg"></span>');
	var msg = '<span style="color:red;">Contact person Alternative Mobile Number should be numeric (e.g: 9999998765 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#cpaltmobilemsg").html(msg).show();
		alert("Contact person Alternative  Mobile Number should be numeric (e.g: 9999998765 )");
		cpaltmobile.focus(function(){
			cpaltmobile.css("background-color","#FFFFCC");
		});
		cpaltmobile.focus();
		return false;
        }else if(x.length !=0) {
		  $("#cpaltmobilemsg").html(msg).hide();
		  $("#cpaltmobilemsg").html(newmsg).show();
		 }else{
		  $("#cpaltmobilemsg").html(msg).hide();
		}
});

cpaltmobile.blur(function(){
	var x = cpaltmobile.val();
	if(x.length !=0) {
		cpaltmobile.css("background-color","#D6D6FF");
	}
});

//cd to be recieved on
var cdrecievedonmobile = $("#edit-field-mo-cou-det-rec-mob-0-number");
cdrecievedonmobile.keyup(function(){
	var x = cdrecievedonmobile.val();
	$('#edit-field-mo-cou-det-rec-mob-0-number-wrapper').append('<span id="cdrecievedonmobilemsg"></span>');
	var msg = '<span style="color:red;">Coupon detail to be recieved on Mobile Number should be numeric (e.g: 9999998765 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#cdrecievedonmobilemsg").html(msg).show();
		alert("Coupon detail to be recieved on Mobile Number should be numeric (e.g: 9999998765 )");
		cdrecievedonmobile.focus(function(){
			cdrecievedonmobile.css("background-color","#FFFFCC");
		});
		cdrecievedonmobile.focus();
		return false;
        }else if(x.length !=0) {
		  $("#cdrecievedonmobilemsg").html(msg).hide();
		  $("#cdrecievedonmobilemsg").html(newmsg).show();
		 }else{
		  $("#cdrecievedonmobilemsg").html(msg).hide();
		}
});

cdrecievedonmobile.blur(function(){
	var x = cdrecievedonmobile.val();
	if(x.length !=0) {
	cdrecievedonmobile.css("background-color","#D6D6FF");
	}
});

//outlet landline no
var outletlandlineno = $("#edit-field-mo-outlet-lnd-no-0-number");
outletlandlineno.keyup(function(){
	var x = outletlandlineno.val();
	$('#edit-field-mo-outlet-lnd-no-0-number-wrapper').append('<span id="outletlandlinenomsg"></span>');
	var msg = '<span style="color:red;">Coupon detail to be recieved on Mobile Number should be numeric (e.g: 9999998765 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#outletlandlinenomsg").html(msg).show();
		alert("Coupon detail to be recieved on Mobile Number should be numeric (e.g: 9999998765 )");
		outletlandlineno.focus(function(){
			outletlandlineno.css("background-color","#FFFFCC");
		});
		outletlandlineno.focus();
		return false;
        }else if(x.length !=0) {
		  $("#outletlandlinenomsg").html(msg).hide();
		  $("#outletlandlinenomsg").html(newmsg).show();
		 }else{
		  $("#outletlandlinenomsg").html(msg).hide();
		}
});
outletlandlineno.blur(function(){
	var x = outletlandlineno.val();
	if(x.length !=0) {
	outletlandlineno.css("background-color","#D6D6FF");
	}
});

//appoint no
var appointmentno = $("#edit-field-mo-app-mon-num-0-number");
appointmentno.keyup(function(){
	var x = appointmentno.val();
	$('#edit-field-mo-app-mon-num-0-number-wrapper').append('<span id="appointmentnomsg"></span>');
	var msg = '<span style="color:red;">Appointment Number should be numeric (e.g: 9999998765 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#appointmentnomsg").html(msg).show();
		alert("Appointment Number should be numeric (e.g: 9999998765 )");
		appointmentno.focus(function(){
			appointmentno.css("background-color","#FFFFCC");
		});
		appointmentno.focus();
		return false;
        }else if(x.length !=0) {
		  $("#appointmentnomsg").html(msg).hide();
		  $("#appointmentnomsg").html(newmsg).show();
		 }else{
		  $("#appointmentnomsg").html(msg).hide();
		}
});


appointmentno.blur(function(){
	var x = appointmentno.val();
	$('#edit-field-mo-app-mon-num-0-number-wrapper').append('<span id="appointmentnomsg"></span>');
	var msg = '<span style="color:red;">Appointment Number should be numeric (e.g: 9999998765 )</span>';
	if (x.length == 0) {
		$("#appointmentnomsg").html(msg).show();
		alert("Appointment Number should be numeric (e.g: 9999998765 )");
		appointmentno.focus(function(){
			appointmentno.css("background-color","#FFFFCC");
		});
		appointmentno.focus();
		return false;
        }else {
		  $("#appointmentnomsg").html(msg).hide();
		  $("#appointmentnomsg").html(newmsg).show();
		  $("#appointmentnomsg").html(msg).hide();
		 }
});




//alt appointy no
var altappointmentno = $("#edit-field-mo-app-mon-num-0-number");
altappointmentno.keyup(function(){
	var x = altappointmentno.val();
	$('#edit-field-hop-alt-enq-app-num-0-number-wrapper').append('<span id="altappointmentnomsg"></span>');
	var msg = '<span style="color:red;">Appointment Number should be numeric (e.g: 9999998765 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#altappointmentnomsg").html(msg).show();
		alert("Appointment Number should be numeric (e.g: 9999998765 )");
		altappointmentno.focus(function(){
			altappointmentno.css("background-color","#FFFFCC");
		});
		altappointmentno.focus();
		return false;
        }else if(x.length !=0) {
		  $("#altappointmentnomsg").html(msg).hide();
		  $("#altappointmentnomsg").html(newmsg).show();
		 }else{
		  $("#altappointmentnomsg").html(msg).hide();
		}
});
altappointmentno.blur(function(){
	var x = altappointmentno.val();
	if(x.length !=0) {
	altappointmentno.css("background-color","#D6D6FF");
	}
});
//number of tables
var numoftables = $("#edit-field-hop-no-tbls-bed-mo-0-value");
numoftables.keyup(function(){
	var x = numoftables.val();
	$('#edit-field-hop-no-tbls-bed-mo-0-value-wrapper').append('<span id="numoftablesmsg"></span>');
	var msg = '<span style="color:red;">Number of table should be numeric  (e.g: 25987 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#numoftablesmsg").html(msg).show();
		alert("Number of table should be numeric  (e.g: 25987 )");
		numoftables.focus(function(){
			numoftables.css("background-color","#FFFFCC");
		});
		numoftables.focus();
		return false;
        }else if(x.length !=0) {
		  $("#numoftablesmsg").html(msg).hide();
		  $("#numoftablesmsg").html(newmsg).show();
		}else{
		  $("#numoftablesmsg").html(msg).hide();
		}
});

numoftables.blur(function(){
	var x = numoftables.val();
	if(x.length !=0) {
	numoftables.css("background-color","#D6D6FF");
	}
});

//poster required
var posterreq = $("#edit-field-hop-poster-requir-mo-0-value");
posterreq.keyup(function(){
	var x = posterreq.val();
	$('#edit-field-hop-poster-requir-mo-0-value-wrapper').append('<span id="posterreqmsg"></span>');
	var msg = '<span style="color:red;">Poster required should be numeric  (e.g: 25987 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#posterreqmsg").html(msg).show();
		alert("Poster required should be numeric  (e.g: 25987 )");
		posterreq.focus(function(){
			posterreq.css("background-color","#FFFFCC");
		});
		posterreq.focus();
		return false;
        }else if(x.length !=0) {
		  $("#posterreqmsg").html(msg).hide();
		  $("#posterreqmsg").html(newmsg).show();
		}else{
		  $("#posterreqmsg").html(msg).hide();
		}
});

posterreq.blur(function(){
	var x = posterreq.val();
	if(x.length !=0) {
	posterreq.css("background-color","#D6D6FF");
	}
});

//danglers required
var danglers_req = $("#edit-field-hop-danglers-mo-0-value");
danglers_req.keyup(function(){
	var x = danglers_req.val();
	$('#edit-field-hop-danglers-mo-0-value-wrapper').append('<span id="danglers_reqmsg"></span>');
	var msg = '<span style="color:red;">Danglers required should be numeric  (e.g: 25987 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#danglers_reqmsg").html(msg).show();
		alert("Danglers required should be numeric  (e.g: 25987 )");
		danglers_req.focus(function(){
			danglers_req.css("background-color","#FFFFCC");
		});
		danglers_req.focus();
		return false;
        }else if(x.length !=0) {
		  $("#danglers_reqmsg").html(msg).hide();
		  $("#danglers_reqmsg").html(newmsg).show();
		}else{
		  $("#danglers_reqmsg").html(msg).hide();
		}
});

danglers_req.blur(function(){
	var x = danglers_req.val();
	if(x.length !=0) {
	danglers_req.css("background-color","#D6D6FF");
	}
});
//tent card required
var tentcard_req = $("#edit-field-hop-tent-card-requ-mo-0-value");
tentcard_req.keyup(function(){
	var x = tentcard_req.val();
	$('#edit-field-hop-tent-card-requ-mo-0-value-wrapper').append('<span id="tentcard_reqmsg"></span>');
	var msg = '<span style="color:red;">Tent card required should be numeric  (e.g: 25987 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#tentcard_reqmsg").html(msg).show();
		alert("Tent card required should be numeric  (e.g: 25987 )");
		tentcard_req.focus(function(){
			tentcard_req.css("background-color","#FFFFCC");
		});
		tentcard_req.focus();
		return false;
        }else if(x.length !=0) {
		  $("#tentcard_reqmsg").html(msg).hide();
		  $("#tentcard_reqmsg").html(newmsg).show();
		}else{
		  $("#tentcard_reqmsg").html(msg).hide();
		}
});

tentcard_req.blur(function(){
	var x = tentcard_req.val();
	if(x.length !=0) {
	tentcard_req.css("background-color","#D6D6FF");
	}
});
//standee required
var standee_req = $("#edit-field-hop-standees-mo-0-value");
standee_req.keyup(function(){
	var x = standee_req.val();
	$('#edit-field-hop-standees-mo-0-value-wrapper').append('<span id="standee_reqmsg"></span>');
	var msg = '<span style="color:red;">Standee required should be numeric  (e.g: 25987 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#standee_reqmsg").html(msg).show();
		alert("Standee required should be numeric  (e.g: 25987 )");
		standee_req.focus(function(){
			standee_req.css("background-color","#FFFFCC");
		});
		standee_req.focus();
		return false;
        }else if(x.length !=0) {
		  $("#standee_reqmsg").html(msg).hide();
		  $("#standee_reqmsg").html(newmsg).show();
		}else{
		  $("#standee_reqmsg").html(msg).hide();
		}
});
standee_req.blur(function(){
	var x = standee_req.val();
	if(x.length !=0) {
	standee_req.css("background-color","#D6D6FF");
	}
});
//sticker required
var stickersreq = $("#edit-field-hop-stickers-mo-0-value");
stickersreq.keyup(function(){
	var x = stickersreq.val();
	$('#edit-field-hop-stickers-mo-0-value-wrapper').append('<span id="stickers_reqmsg"></span>');
	var msg = '<span style="color:red;">Sticker required should be numeric  (e.g: 25987 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#stickers_reqmsg").html(msg).show();
		alert("Sticker required should be numeric  (e.g: 25987 )");
		stickersreq.focus(function(){
			stickersreq.css("background-color","#FFFFCC");
		});
		stickersreq.focus();
		return false;
        }else if(x.length !=0) {
		  $("#stickers_reqmsg").html(msg).hide();
		  $("#stickers_reqmsg").html(newmsg).show();
		}else{
		  $("#stickers_reqmsg").html(msg).hide();
		}
});
stickersreq.blur(function(){
	var x = stickersreq.val();
	if(x.length !=0) {
	stickersreq.css("background-color","#D6D6FF");
	}
});
//Mobile Number from which Location SMS has been send:
var mobnofrmlocsmssend = $("#edit-field-hop-mnfwsmssend-mo-0-number");
mobnofrmlocsmssend.keyup(function(){
	var x = mobnofrmlocsmssend.val();
	$('#edit-field-hop-mnfwsmssend-mo-0-number-wrapper').append('<span id="mobnofrmlocsmssendmsg"></span>');
	var msg = '<span style="color:red;">Mobile Number from which Location SMS has been send should be numeric (e.g: 9999998765 )</span>';
	if (isNaN(x)||x.indexOf(" ")!=-1) {
		$("#mobnofrmlocsmssendmsg").html(msg).show();
		alert("Mobile Number from which Location SMS has been send should be numeric (e.g: 9999998765 )");
		mobnofrmlocsmssend.focus(function(){
			mobnofrmlocsmssend.css("background-color","#FFFFCC");
		});
		mobnofrmlocsmssend.focus();
		return false;
        }else if(x.length !=0) {
		  $("#mobnofrmlocsmssendmsg").html(msg).hide();
		  $("#mobnofrmlocsmssendmsg").html(newmsg).show();
		 }else{
		  $("#mobnofrmlocsmssendmsg").html(msg).hide();
		}
});
mobnofrmlocsmssend.blur(function(){
	var x = mobnofrmlocsmssend.val();
	if(x.length !=0) {
		mobnofrmlocsmssend.css("background-color","#D6D6FF");
	}
});


//Latitude:
//Longitude:



});//ready function closed

function clear_form_elements(ele) {

$(ele).find(':input').each(function() {
switch(this.type) {
case 'password':
case 'select-multiple':
case 'select-one':
case 'text':
case 'textarea':
$(this).val('');
break;
case 'checkbox':
case 'radio':
this.checked = false;
}
});

}
