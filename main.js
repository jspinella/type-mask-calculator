
binaryFinal = 0;


// Document Ready
$(document).ready(function() {


	// APN vzwinternet Button
	$('#button-vzwinternet').click(function() {
		
		if($(this).hasClass("apn-button-active")) {
		    // reset binary table (or maybe have it return to previous values, if possible?)
		    $("#bival-1").text("0");
		    $("#bival-2").text("0");
		    $("#bival-4").text("0");
		    $("#bival-8").text("0");
		    $("#bival-16").text("0");
		    $("#bival-32").text("0");
		    $("#bival-64").text("0");
		    $("#bival-128").text("0");
		    $("#bival-256").text("0");
		    $("#bival-512").text("0");
		    $("#bival-1024").text("0");
		    $("#bival-2048").text("0");
		    $("#bival-4096").text("0");
		    $("#bival-8192").text("0");
		    $("#bival-16384").text("0");
		    $("#bival-32768").text("0");
		    $("#bival-65536").text("0");
		    // set binary final value
		    binaryFinal = 0;
			$("#binary-final").text(binaryFinal);	 
	    } else {
		    // set binary table to 19
		    $("#bival-1").text("1");
		    $("#bival-2").text("1");
		    $("#bival-4").text("0");
		    $("#bival-8").text("0");
		    $("#bival-16").text("1");
		    $("#bival-32").text("0");
		    $("#bival-64").text("0");
		    $("#bival-128").text("0");
		    $("#bival-256").text("0");
		    $("#bival-512").text("0");
		    $("#bival-1024").text("0");
		    $("#bival-2048").text("0");
		    $("#bival-4096").text("0");
		    $("#bival-8192").text("0");
		    $("#bival-16384").text("0");
		    $("#bival-32768").text("0");
		    $("#bival-65536").text("0");
		    // set binary final value
		    binaryFinal = 19;
		    $("#binary-final").text(binaryFinal);	    
	    }
    });
    
    // APN vzwapp Button
	$('#button-vzwapp').click(function() {	
		if($(this).hasClass("apn-button-active")) {
		    // reset binary table (or maybe have it return to previous values, if possible?)
		    $("#bival-1").text("0");
		    $("#bival-2").text("0");
		    $("#bival-4").text("0");
		    $("#bival-8").text("0");
		    $("#bival-16").text("0");
		    $("#bival-32").text("0");
		    $("#bival-64").text("0");
		    $("#bival-128").text("0");
		    $("#bival-256").text("0");
		    $("#bival-512").text("0");
		    $("#bival-1024").text("0");
		    $("#bival-2048").text("0");
		    $("#bival-4096").text("0");
		    $("#bival-8192").text("0");
		    $("#bival-16384").text("0");
		    $("#bival-32768").text("0");
		    $("#bival-65536").text("0");
		    // set binary final value
		    binaryFinal = 0;
			$("#binary-final").text(binaryFinal);	 
	    } else {
		    // set binary table to 32772
		    $("#bival-1").text("0");
		    $("#bival-2").text("0");
		    $("#bival-4").text("1");
		    $("#bival-8").text("0");
		    $("#bival-16").text("0");
		    $("#bival-32").text("0");
		    $("#bival-64").text("0");
		    $("#bival-128").text("0");
		    $("#bival-256").text("0");
		    $("#bival-512").text("0");
		    $("#bival-1024").text("0");
		    $("#bival-2048").text("0");
		    $("#bival-4096").text("0");
		    $("#bival-8192").text("0");
		    $("#bival-16384").text("0");
		    $("#bival-32768").text("1");
		    $("#bival-65536").text("0");
		    // set binary final value
		    binaryFinal = 32772;
			$("#binary-final").text(binaryFinal);		    
	    }
    });
    
        // APN vzwapp2 Button
	$('#button-vzwapp2').click(function() {		
		if($(this).hasClass("apn-button-active")) {
		    // reset binary table (or maybe have it return to previous values, if possible?)
		    $("#bival-1").text("0");
		    $("#bival-2").text("0");
		    $("#bival-4").text("0");
		    $("#bival-8").text("0");
		    $("#bival-16").text("0");
		    $("#bival-32").text("0");
		    $("#bival-64").text("0");
		    $("#bival-128").text("0");
		    $("#bival-256").text("0");
		    $("#bival-512").text("0");
		    $("#bival-1024").text("0");
		    $("#bival-2048").text("0");
		    $("#bival-4096").text("0");
		    $("#bival-8192").text("0");
		    $("#bival-16384").text("0");
		    $("#bival-32768").text("0");
		    $("#bival-65536").text("0");
		    // set binary final value
		    binaryFinal = 0;
			$("#binary-final").text(binaryFinal);	 
	    } else {
		    // set binary table to 49156
		    $("#bival-1").text("0");
		    $("#bival-2").text("0");
		    $("#bival-4").text("1");
		    $("#bival-8").text("0");
		    $("#bival-16").text("0");
		    $("#bival-32").text("0");
		    $("#bival-64").text("0");
		    $("#bival-128").text("0");
		    $("#bival-256").text("0");
		    $("#bival-512").text("0");
		    $("#bival-1024").text("0");
		    $("#bival-2048").text("0");
		    $("#bival-4096").text("0");
		    $("#bival-8192").text("0");
		    $("#bival-16384").text("1");
		    $("#bival-32768").text("1");
		    $("#bival-65536").text("0");
		    // set binary final value
		    binaryFinal = 49156;
		    $("#binary-final").text(binaryFinal);	    
	    }
    });


	// APN vzwadmin Button
	$('#button-vzwadmin').click(function() {
		
		if($(this).hasClass("apn-button-active")) {
		    // reset binary table (or maybe have it return to previous values, if possible?)
		    $("#bival-1").text("0");
		    $("#bival-2").text("0");
		    $("#bival-4").text("0");
		    $("#bival-8").text("0");
		    $("#bival-16").text("0");
		    $("#bival-32").text("0");
		    $("#bival-64").text("0");
		    $("#bival-128").text("0");
		    $("#bival-256").text("0");
		    $("#bival-512").text("0");
		    $("#bival-1024").text("0");
		    $("#bival-2048").text("0");
		    $("#bival-4096").text("0");
		    $("#bival-8192").text("0");
		    $("#bival-16384").text("0");
		    $("#bival-32768").text("0");
		    $("#bival-65536").text("0");
		    // set binary final value
		    binaryFinal = 0;
			$("#binary-final").text(binaryFinal);	 
	    } else {
		    // set binary table to 19
		    $("#bival-1").text("0");
		    $("#bival-2").text("0");
		    $("#bival-4").text("0");
		    $("#bival-8").text("0");
		    $("#bival-16").text("0");
		    $("#bival-32").text("0");
		    $("#bival-64").text("0");
		    $("#bival-128").text("0");
		    $("#bival-256").text("0");
		    $("#bival-512").text("1");
		    $("#bival-1024").text("0");
		    $("#bival-2048").text("0");
		    $("#bival-4096").text("0");
		    $("#bival-8192").text("0");
		    $("#bival-16384").text("0");
		    $("#bival-32768").text("0");
		    $("#bival-65536").text("0");
		    // set binary final value
		    binaryFinal = 512;
		    $("#binary-final").text(binaryFinal);	    
	    }
    });

    
    
    //
    // When a binary value is clicked
    //
    
	//1
	$('#block-1').click(function() {
		if ($("#bival-1").text() == "0") {
			$("#bival-1").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 1;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-1").text("0");
			// set binaryFinal value
			binaryFinal = binaryFinal - 1;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);	
		}
	});	
	// 2
	$('#block-2').click(function() {
		if ($("#bival-2").text() == "0") {
			$("#bival-2").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 2;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-2").text("0");	
			// set binaryFinal value
			binaryFinal = binaryFinal - 2;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		}
	});	
	// 4
	$('#block-4').click(function() {
		if ($("#bival-4").text() == "0") {
			$("#bival-4").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 4;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-4").text("0");
			// set binaryFinal value
			binaryFinal = binaryFinal - 4;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);	
		}
	});	
	// 8
	$('#block-8').click(function() {
		if ($("#bival-8").text() == "0") {
			$("#bival-8").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 8;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-8").text("0");
			// set binaryFinal value
			binaryFinal = binaryFinal - 8;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);	
		}
	});	
	// 16
	$('#block-16').click(function() {
		if ($("#bival-16").text() == "0") {
			$("#bival-16").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 16;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-16").text("0");
			// set binaryFinal value
			binaryFinal = binaryFinal - 16;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);	
		}
	});	
	$('#block-32').click(function() {
		if ($("#bival-32").text() == "0") {
			$("#bival-32").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 32;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-32").text("0");
			// set binaryFinal value
			binaryFinal = binaryFinal - 32;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);	
		}
	});	
	$('#block-64').click(function() {
		if ($("#bival-64").text() == "0") {
			$("#bival-64").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 64;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-64").text("0");	
			// set binaryFinal value
			binaryFinal = binaryFinal - 64;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		}
	});	
	$('#block-128').click(function() {
		if ($("#bival-128").text() == "0") {
			$("#bival-128").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 128;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-128").text("0");	
			// set binaryFinal value
			binaryFinal = binaryFinal - 128;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		}
	});	
	$('#block-256').click(function() {
		if ($("#bival-256").text() == "0") {
			$("#bival-256").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 256;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-256").text("0");	
			// set binaryFinal value
			binaryFinal = binaryFinal - 256;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		}
	});	
	$('#block-512').click(function() {
		if ($("#bival-512").text() == "0") {
			$("#bival-512").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 512;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-512").text("0");	
			// set binaryFinal value
			binaryFinal = binaryFinal - 512;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		}
	});	
	$('#block-1024').click(function() {
		if ($("#bival-1024").text() == "0") {
			$("#bival-1024").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 1024;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-1024").text("0");
			// set binaryFinal value
			binaryFinal = binaryFinal - 1024;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);	
		}
	});	
	$('#block-2048').click(function() {
		if ($("#bival-2048").text() == "0") {
			$("#bival-2048").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 2048;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-2048").text("0");	
			// set binaryFinal value
			binaryFinal = binaryFinal - 2048;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		}
	});	
	$('#block-4096').click(function() {
		if ($("#bival-4096").text() == "0") {
			$("#bival-4096").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 4096;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-4096").text("0");	
			// set binaryFinal value
			binaryFinal = binaryFinal - 4096;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		}
	});	
	$('#block-8192').click(function() {
		if ($("#bival-8192").text() == "0") {
			$("#bival-8192").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 8192;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-8192").text("0");	
			// set binaryFinal value
			binaryFinal = binaryFinal - 8192;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		}
	});	
	$('#block-16384').click(function() {
		if ($("#bival-16384").text() == "0") {
			$("#bival-16384").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 16384;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-16384").text("0");
			// set binaryFinal value
			binaryFinal = binaryFinal - 16384;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		}
	});	
	$('#block-32768').click(function() {
		if ($("#bival-32768").text() == "0") {
			$("#bival-32768").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 32768;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-32768").text("0");
			// set binaryFinal value
			binaryFinal = binaryFinal - 32768;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);	
		}
	});	
	$('#block-65536').click(function() {
		if ($("#bival-65536").text() == "0") {
			$("#bival-65536").text("1");
			// set binaryFinal value
			binaryFinal = binaryFinal + 65536;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);
		} else {
			$("#bival-65536").text("0");
			// set binaryFinal value
			binaryFinal = binaryFinal - 65536;
			// refresh final value from binaryFinal
			$("#binary-final").text(binaryFinal);	
		}
	});	
	
	      
});






// Document Change (on click)
$(document).click(function() {

  	// if user manually sets final to 19, light up APN button
	if ($("#binary-final").text() == "19") {
		$("#button-vzwinternet").addClass("apn-button-active");
	} else {
		$("#button-vzwinternet").removeClass("apn-button-active");
	}
	
	// if user manually sets final to 32772, light up APN button
	if ($("#binary-final").text() == "32772") {
		$("#button-vzwapp").addClass("apn-button-active");
	} else {
		$("#button-vzwapp").removeClass("apn-button-active");
	}
	
	// if user manually sets final to 49156, light up APN button
	if ($("#binary-final").text() == "49156") {
		$("#button-vzwapp2").addClass("apn-button-active");
	} else {
		$("#button-vzwapp2").removeClass("apn-button-active");
	}
	
    // if user manually sets final to 512, light up APN button
	if ($("#binary-final").text() == "512") {
		$("#button-vzwadmin").addClass("apn-button-active");
	} else {
		$("#button-vzwadmin").removeClass("apn-button-active");
	}
	
	
	
	// binary line active styles
	
	// 1
	if ($("#bival-1").text() == "1") {
		$("#binary-affect-1").addClass("binary-affect-active");
		$("#binary-line-1").addClass("binary-line-active");		
	} else {
		$("#binary-affect-1").removeClass("binary-affect-active");
		$("#binary-line-1").removeClass("binary-line-active");
	}
	
	// 2
	if ($("#bival-2").text() == "1") {
		$("#binary-affect-2").addClass("binary-affect-active");
		$("#binary-line-2").addClass("binary-line-active");		
	} else {
		$("#binary-affect-2").removeClass("binary-affect-active");
		$("#binary-line-2").removeClass("binary-line-active");
	}
	
	// 4
	if ($("#bival-4").text() == "1") {
		$("#binary-affect-4").addClass("binary-affect-active");
		$("#binary-line-4").addClass("binary-line-active");		
	} else {
		$("#binary-affect-4").removeClass("binary-affect-active");
		$("#binary-line-4").removeClass("binary-line-active");
	}
	
	// 8
	if ($("#bival-8").text() == "1") {
		$("#binary-affect-8").addClass("binary-affect-active");
		$("#binary-line-8").addClass("binary-line-active");		
	} else {
		$("#binary-affect-8").removeClass("binary-affect-active");
		$("#binary-line-8").removeClass("binary-line-active");
	}
	
	// 16
	if ($("#bival-16").text() == "1") {
		$("#binary-affect-16").addClass("binary-affect-active");
		$("#binary-line-16").addClass("binary-line-active");		
	} else {
		$("#binary-affect-16").removeClass("binary-affect-active");
		$("#binary-line-16").removeClass("binary-line-active");
	}
	
	// 32
	if ($("#bival-32").text() == "1") {
		$("#binary-affect-32").addClass("binary-affect-active");
		$("#binary-line-32").addClass("binary-line-active");		
	} else {
		$("#binary-affect-32").removeClass("binary-affect-active");
		$("#binary-line-32").removeClass("binary-line-active");
	}
	
	// 64
	if ($("#bival-64").text() == "1") {
		$("#binary-affect-64").addClass("binary-affect-active");
		$("#binary-line-64").addClass("binary-line-active");		
	} else {
		$("#binary-affect-64").removeClass("binary-affect-active");
		$("#binary-line-64").removeClass("binary-line-active");
	}
	
	// 128
	if ($("#bival-128").text() == "1") {
		$("#binary-affect-128").addClass("binary-affect-active");
		$("#binary-line-128").addClass("binary-line-active");		
	} else {
		$("#binary-affect-128").removeClass("binary-affect-active");
		$("#binary-line-128").removeClass("binary-line-active");
	}
	
	// 256
	if ($("#bival-256").text() == "1") {
		$("#binary-affect-256").addClass("binary-affect-active");
		$("#binary-line-256").addClass("binary-line-active");		
	} else {
		$("#binary-affect-256").removeClass("binary-affect-active");
		$("#binary-line-256").removeClass("binary-line-active");
	}
	
	// 512
	if ($("#bival-512").text() == "1") {
		$("#binary-affect-512").addClass("binary-affect-active");
		$("#binary-line-512").addClass("binary-line-active");		
	} else {
		$("#binary-affect-512").removeClass("binary-affect-active");
		$("#binary-line-512").removeClass("binary-line-active");
	}
	
	// 1024
	if ($("#bival-1024").text() == "1") {
		$("#binary-affect-1024").addClass("binary-affect-active");
		$("#binary-line-1024").addClass("binary-line-active");		
	} else {
		$("#binary-affect-1024").removeClass("binary-affect-active");
		$("#binary-line-1024").removeClass("binary-line-active");
	}
	
	// 2048
	if ($("#bival-2048").text() == "1") {
		$("#binary-affect-2048").addClass("binary-affect-active");
		$("#binary-line-2048").addClass("binary-line-active");		
	} else {
		$("#binary-affect-2048").removeClass("binary-affect-active");
		$("#binary-line-2048").removeClass("binary-line-active");
	}
	
	// 4096
	if ($("#bival-4096").text() == "1") {
		$("#binary-affect-4096").addClass("binary-affect-active");
		$("#binary-line-4096").addClass("binary-line-active");		
	} else {
		$("#binary-affect-4096").removeClass("binary-affect-active");
		$("#binary-line-4096").removeClass("binary-line-active");
	}
	
	// 8192
	if ($("#bival-8192").text() == "1") {
		$("#binary-affect-8192").addClass("binary-affect-active");
		$("#binary-line-8192").addClass("binary-line-active");		
	} else {
		$("#binary-affect-8192").removeClass("binary-affect-active");
		$("#binary-line-8192").removeClass("binary-line-active");
	}
	
	// 16384
	if ($("#bival-16384").text() == "1") {
		$("#binary-affect-16384").addClass("binary-affect-active");
		$("#binary-line-16384").addClass("binary-line-active");		
	} else {
		$("#binary-affect-16384").removeClass("binary-affect-active");
		$("#binary-line-16384").removeClass("binary-line-active");
	}
	
	// 32768
	if ($("#bival-32768").text() == "1") {
		$("#binary-affect-32768").addClass("binary-affect-active");
		$("#binary-line-32768").addClass("binary-line-active");		
	} else {
		$("#binary-affect-32768").removeClass("binary-affect-active");
		$("#binary-line-32768").removeClass("binary-line-active");
	}
	
	// 65536
	if ($("#bival-65536").text() == "1") {
		$("#binary-affect-65536").addClass("binary-affect-active");
		$("#binary-line-65536").addClass("binary-line-active");		
	} else {
		$("#binary-affect-65536").removeClass("binary-affect-active");
		$("#binary-line-65536").removeClass("binary-line-active");
	}

	
	
	// on click (aka when binaryFinal changes), addCommas to final value
	addCommas(binaryFinal);
	
	    
    
});

