
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:@
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler@
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		document.addEventListener("resume", onResume, false);
        app.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		
		if(PushbotsPlugin.isiOS()){
			PushbotsPlugin.initializeiOS("56124b6a177959a61f8b4569");
		}
		if(PushbotsPlugin.isAndroid()){
			PushbotsPlugin.initializeAndroid("56124b6a177959a61f8b4569", "832900999185");
		}
		
		//PushbotsPlugin.resetBadge();
		
		//var isPhone = screen.height < 800 || screen.width < 800;
		
		var isMobileScreenWidth = (screen.width / window.devicePixelRatio)
			
		//alert("RATIO:" + window.devicePixelRatio);
		
		//$(window).height()
		
		//IPAD CHANGE
		if(isMobileScreenWidth < 768){
			
				//alert("Phone:" + isMobileScreenWidth);

				$("#copertina").attr("height", "60%");
				$("#testoTitolo").attr("class", "visione2DROID");
				$("#testo").attr("class", "visioneDROID");
				$("#testoCentrale").attr("class", "visione3DROID");
				$("#Nome").attr("class", "visione3aDROID");
				$("#titolo").attr("class", "visione4DROID");
				$("#spazioipad").show();
                $("#spazioipad3").show();
			    $("#spazioipad4").show();
			    $("#spazioipad5").show();
			    $("#spazioipad6").show();
			    $("#spazioipad7").show();
			    $("#spazioipad8").show();

                $("#sendapp").attr("class", "visione3DROID");
			    $("#scegli").attr("class", "visioneDROID0");
			    $("#digital").attr("class", "visione3DROID");
			
			    $("#indirizzotext").attr("class", "visione2DROID");
			    $("#indirizzoV").attr("class", "visione2DROID");
			    $("#phonetext").attr("class", "visione2DROID");
			    $("#phoneV").attr("class", "visione2DROID");
			    $("#mobiletext").attr("class", "visione2DROID");
			    $("#mobileV").attr("class", "visione2DROID");
			    $("#emailtext").attr("class", "visione2DROID");
			    $("#emailV").attr("class", "visione2DROID");
			    $("#webtext").attr("class", "visione2DROID");
			    $("#webV").attr("class", "visione2DROID");
				
				initscroll()
		}
		else
		{
			//alert("Tablet:" + isMobileScreenWidth);
			
			$("#testoTitolo").attr("class", "visione2IPAD");
			$("#testo").attr("class", "visioneIPAD");
			$("#testoCentrale").attr("class", "visione3IPAD");
			$("#Nome").attr("class", "visione3IPAD");
			$("#titolo").attr("class", "visione4IPAD");
			$("#titolov1").attr("class", "visione4IPAD");
			$("#titolov2").attr("class", "visione4IPAD");
			$("#copertina").attr("height", "100%");
			$("#pallina").attr("width", "46px");
			$("#spazioipad").show();
			$("#spazioipad3").show();
			$("#spazioipad4").show();
			$("#spazioipad5").show();
			$("#spazioipad6").show();
			$("#spazioipad7").show();
			$("#spazioipad8").show();
			
			$("#sendapp").attr("class", "visione3IPAD");
			$("#scegli").attr("class", "visioneIPAD0");
			$("#digital").attr("class", "visione3IPAD");
			
			$("#indirizzotext").attr("class", "visioneIPAD");
			$("#indirizzoV").attr("class", "visione2IPAD");
			$("#phonetext").attr("class", "visioneIPAD");
			$("#phoneV").attr("class", "visione2IPAD");
			$("#mobiletext").attr("class", "visioneIPAD");
			$("#mobileV").attr("class", "visione2IPAD");
			$("#emailtext").attr("class", "visioneIPAD");
			$("#emailV").attr("class", "visione2IPAD");
			$("#webtext").attr("class", "visioneIPAD");
			$("#webV").attr("class", "visione2IPAD");

            $("#video").attr("width", "460px");
            $("#video2").attr("width", "460px");

            initscroll()

		}
		
		var ciccio;
		var token;
		
		$(document).on("touchend", "#primo", function(e){
			$.mobile.changePage( "#page2", { transition: "slide", changeHash: false });
			carica()
		});
		
		$(document).on("touchend", "#secondo", function(e){
			aprisms0()
			//$.mobile.changePage( "#page3", { transition: "slide", changeHash: false });
			//carica2()
		});
		
		$(document).on("touchend", "#terzo", function(e){
            e.preventDefault();
			$.mobile.changePage( "#page4", { transition: "slide", changeHash: false });
			carica3()
		});
		
		$(document).on("touchend", "#quarto", function(e){
			$.mobile.changePage( "#page6", { transition: "slide", changeHash: false });
			carica4()
		});
		
		$(document).on("touchend", "#sesto", function(e){
			$.mobile.changePage( "#page8", { transition: "slide", changeHash: false });
			carica8();
		});
		
		$(document).on("touchend", "#vedi", function(e){
			$.mobile.changePage( "#page7", { transition: "slide", changeHash: false });
			vedi()
		});
		
		$(document).on("touchend", "#primos", function(e){
			$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			 myScroll.scrollTo(0,0);
		});
		
		$(document).on("touchend", "#secondos", function(e){
			$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			myScroll.scrollTo(0,0);
		});
		
		$(document).on("touchend", "#terzos", function(e){
			var contenuto = ""
			
			setTimeout (function(){
				$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
				myScroll.scrollTo(0,0);
				checkpush()
			}, 300);

		});
		
		$(document).on("touchend", "#quartos", function(e){
				
			e.preventDefault();
            $.mobile.changePage( "#page4", { transition: "slide", changeHash: false, reverse: true });
			carica3()
		});
		
		$(document).on("touchend", "#quintos", function(e){
			$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			myScroll.scrollTo(0,0);
		});
		
		$(document).on("touchend", "#ottavos", function(e){
			$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			myScroll.scrollTo(0,0);
		});
		
		$(document).on("touchend", "#pulsms", function(e){
			aprisms()
		});
		
		$(document).on("touchend", "#pulrefresh", function(e){
			carica3()
		});
		
		//$("#video").html("<iframe width='220' height='130' src='http://www.youtube.com/embed/cf5PVgbrlCM?feature=player_embedded' frameborder='0' allowfullscreen></iframe>");
		
		//$("#video2").html("<iframe width='220' height='130' src='http://www.youtube.com/embed/Hl10lNEVBrU?feature=player_embedded' frameborder='0' allowfullscreen></iframe>");
		

		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
			
			
			$(".spinner").hide();
			
			 //checkpush()
			//provino()
			
			setTimeout (function(){
						
						PushbotsPlugin.getToken(function(token){
							
							localStorage.setItem("Token", token);
							
							/*navigator.notification.alert(
																			 localStorage.getItem("Token"),  // message
																			 alertDismissed,         // callback
																			 'Token',            // title
																			 'Done'                  // buttonName
																			 );*/
												
							regToken()
												
						});
						
			}, 2000);
			
			
		}
		else{
			/*$('#noconn').show();
			
			var tabella = "<table align='center' border='0' width='100%' height='120px'>";
			tabella = tabella + "<tr><td align='center'><a href='javascript:riparti()' class='btn'><font color='#fff'>Connetti</font></a></td></tr>";
			tabella = tabella + "</table>";
			
			$('#noconn').html(tabella);

			$(".spinner").hide();
			
			$("#footer").show();*/
				
			$(".spinner").hide();
			
					   navigator.notification.alert(
							'Nessuna Connessione Internet, Riprova Tra Qualche Minuto',  // message
							alertDismissed,         // callback
							'Connessione Internet',            // title
							'OK'                  // buttonName
						);
				
		}
    }
	
}


function verificawifi(){
	$("#verifica").click();
}


function onResume() {
	
	setTimeout(function() {
		//alert("onResume");
		navigator.splashscreen.show();
		window.location.href = "#page";
		setTimeout(function() {
			navigator.splashscreen.hide();
		}, 2500);
	}, 0);
	
}


function getKey(key){
	if ( key == null ) {
		keycode = event.keyCode;
		
	} else {
		keycode = key.keyCode;
	}
	
	if (keycode ==13){
		
		document.activeElement.blur();
		$("input").blur()
		return false;
		
	}
	
}


function alertDismissed() {
	
}


function initscroll() {
	
myScroll = new iScroll('wrapper', {
				zoom: true,
				click: true,
				hScrollbar: false, 
				vScrollbar: false,
				zoomMin:1,
				zoomMax:2,
				zoomStart:1
});

myScroll.scrollTo(0,0);

}

function carica() {
	
	$(".spinner").show();
	
	$("#galleriaimg").html("<tr><td width='100%' colspan='2'>&nbsp;</td></tr>");
	
	setTimeout (function(){
				$("#galleriaimg").append("<tr><td width='100%' align='center' ><img src='img/fig1.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig2.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig3.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr>");
				
		
		setTimeout (function(){
				$("#galleriaimg").append("<tr><td width='100%' align='center' ><img src='img/fig4.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig5.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig6.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig7.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig8.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig9.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr>");
					
					$(".spinner").hide();
					
					var myScroll2;
					
					myScroll2 = new iScroll('wrapper2', {
												zoom: true,
												click: true,
												hScrollbar: false, 
												vScrollbar: false,
												zoomMin:1,
												zoomMax:2,
												zoomStart:1
											});
					setTimeout (function(){
						
						myScroll2.refresh();
								
					}, 1000);
					
					
					document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
					
					document.addEventListener('DOMContentLoaded', loaded, false);
					
					
		}, 500);
				
	}, 1000);
	
}

function carica2() {
	
	var myScroll3;
	
	myScroll3 = new iScroll('wrapper3', {
		click: true
	});
	setTimeout (function(){
		myScroll3.refresh();
	}, 1000);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
}

function carica3() {

    provino()

}

function carica4() {
	
	var myScroll6;
	
	myScroll6 = new iScroll('wrapper6', { click: true });
	setTimeout (function(){
		myScroll6.refresh();
	}, 1000);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
}

function carica8() {
	
	var myScroll8;
	
	myScroll8 = new iScroll('wrapper8', { click: true });
	setTimeout (function(){
		myScroll8.refresh();
	}, 1000);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
}

function carica5(id) {
	//alert(id)

     provino2(id)

}

function provino() {
	var ciccio;
	var conta = 1;
	localStorage.setItem("controllo", "1");
	
	var isMobileScreenWidth2 = (screen.width / window.devicePixelRatio)
	
	var contenuto = ""
	//alert("1");

	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/event_list/"+ localStorage.getItem("Token") +"",
		   //data: {token:localStorage.getItem("Token")},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.company_id!=0){
				  //OK
				  
				  if(item.is_read==false){
				  
					if(isMobileScreenWidth2 < 768){
					    contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='90%' align='center'><table width='100%' align='left' valign='center'><tr><td width='100%' align='left' colspan='2' valign='center'><div id='datepush' class='visione'>"+ item.activated_at +" - "+ item.expire_on +" </div></td></tr><tr><td width='100%' colspan='2' valign='center'><div id='titolopush' class='visione'>"+ item.title +"</div> </td></tr></table></td><td width='120' align='center' valign='center'><img id='noletto' src='img/notRead.png' width='42px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  else{
					 contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='90%' align='center'><table width='100%' align='left' valign='center'><tr><td width='100%' align='left' colspan='2' valign='center'><div id='datepush' class='visioneIPAD'>"+ item.activated_at +" - "+ item.expire_on +" </div></td></tr><tr><td width='100%' colspan='2' valign='center'><div id='titolopush' class='visioneIPAD'>"+ item.title +"</div> </td></tr></table></td><td width='120' align='center' valign='center'><img id='noletto' src='img/notRead.png' width='80px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  
					//ciccio = item.image_tag;
				  }
				  else{
					if(isMobileScreenWidth2 < 768){
					   contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='90%' align='center'><table width='100%' align='left' valign='center'><tr><td width='100%' align='left' colspan='2' valign='center'><div id='datepush' class='visione'>"+ item.activated_at +" - "+ item.expire_on +" </div></td></tr><tr><td width='100%' colspan='2' valign='center'><div id='titolopush' class='visione'>"+ item.title +"</div> </td></tr></table></td><td width='120' align='center' valign='center'><img id='letto' src='img/read.png' width='42px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  else{
					contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='90%' align='center'><table width='100%' align='left' valign='center'><tr><td width='100%' align='left' colspan='2' valign='center'><div id='datepush' class='visioneIPAD'>"+ item.activated_at +" - "+ item.expire_on +" </div></td></tr><tr><td width='100%' colspan='2' valign='center'><div id='titolopush' class='visioneIPAD'>"+ item.title +"</div> </td></tr></table></td><td width='120' align='center' valign='center'><img id='letto' src='img/read.png' width='80px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  
					//ciccio = ciccio + item.image_tag;
				  }
				  
				  conta = conta + 1;
				  
				  }
				  else{
				  //alert(result.msg);
				  //window.location.href = "Froala/basic.html";
				  //self.document.formia2.emailL.value = localStorage.getItem("emailMemoria");
				  //window.location.href = "#article4";
				  
				  if(isMobileScreenWidth2 < 768){
				  contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='90%' align='center'><table width='100%' align='left' valign='center'><tr><td width='100%' align='left' colspan='2' valign='center'><div id='datepush' class='visione'>"+ item.activated_at +" - "+ item.expire_on +" </div></td></tr><tr><td width='100%' colspan='2' valign='center'><div id='titolopush' class='visione'>"+ item.title +"</div> </td></tr></table></td><td width='120' align='center' valign='center'><img id='noletto' src='img/notRead.png' width='42px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  else{
					 contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='90%' align='center'><table width='100%' align='left' valign='center'><tr><td width='100%' align='left' colspan='2' valign='center'><div id='datepush' class='visioneIPAD'>"+ item.activated_at +" - "+ item.expire_on +" </div></td></tr><tr><td width='100%' colspan='2' valign='center'><div id='titolopush' class='visioneIPAD'>"+ item.title +"</div> </td></tr></table></td><td width='120' align='center' valign='center'><img id='noletto' src='img/notRead.png' width='80px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  }

				  
			}
				  
		   });
		   
		   $("#contenuto").html(contenuto);
		   
		   $(".spinner").hide();
		   
		   $("tr").click(function(event) {
						 
				if(event.target.nodeName != "A"){
					if ($(this).attr("title") === null || typeof($(this).attr("title")) == 'undefined' || $(this).attr("title")==0){
				}
					else{
						 
						 if(localStorage.getItem("controllo") == "1"){
		 
						 $.mobile.changePage( "#page5", { transition: "slide", changeHash: false });

						 carica5($(this).attr("title"))
						 
						 }

					}
				}
			});
		   
		   var myScroll4;
		   
		   myScroll4 = new iScroll('wrapper4', { click: true });
		   setTimeout (function(){
				myScroll4.refresh();
			}, 700);
		   
		   
		   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		   
		   document.addEventListener('DOMContentLoaded', loaded, false);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Nessuna Connessione Internet, Riprova Tra Qualche Minuto',  // message
										alertDismissed,         // callback
										'Connessione Internet',            // title
										'OK'                  // buttonName
										);
		   
		   
		   },
		   dataType:"json"});
}

function provino2(id) {
    $("#contenuto2").html("");

	var ciccio;
	var conta = 1;
	localStorage.setItem("controllo", "2");
	//alert("2")
	
	var isMobileScreenWidth3 = (screen.width / window.devicePixelRatio)
	
	var contenuto2 = ""
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/event_details/by_id/"+ id +"/"+ localStorage.getItem("Token") +"",
		   //data: {token:localStorage.getItem("Token")},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){

				  if (result.company_id!=0){
			        if(isMobileScreenWidth3 < 768){
					contenuto2 = contenuto2 + "<table width='98%' height='100%' border='0' valign='center' align='center' class='div8'><tr><td width='100%' align='center' colspan='2'><font size='3' color='#042e72'><b>"+ result.activated_at +" - "+ result.expire_on +"</b></font></td></tr><tr><td width='100%' colspan='2' align='center'><font size='3' color='#000'><b>"+ result.title +"</b></font></td></tr><tr><td><hr></td></tr><tr> <td width='100%' align='left'>"+ result.description +"</td></tr><tr> <td width='100%'>&nbsp;</td></tr><tr><td width='100%' align='center' colspan='2'><img src='http://interactivebusinessapp.it/event_image/full_size/by_tag/"+ result.image_tag +"' width='90%'></td></tr><tr><td></td></tr><tr><td></td></tr></table>"
		            }
		   else{
			contenuto2 = contenuto2 + "<table width='98%' height='100%' border='0' valign='center' align='center' class='div8'><tr><td width='100%' align='center' colspan='2'><div id='datepush' class='visioneIPAD'><b>"+ result.activated_at +" - "+ result.expire_on +"</b></div></td></tr><tr><td width='100%' colspan='2' align='center'><div id='datepush' class='visione2IPAD'><b>"+ result.title +"</b></div></td></tr><tr><td><hr></td></tr><tr> <td width='100%' align='left'><div id='datepush' class='visioneIPAD'>"+ result.description +"</div></td></tr><tr> <td width='100%'>&nbsp;</td></tr><tr><td width='100%' align='center' colspan='2'><img src='http://interactivebusinessapp.it/event_image/full_size/by_tag/"+ result.image_tag +"' width='90%'></td></tr><tr><td></td></tr><tr><td></td></tr></table>"
		   }
		   
					conta = conta + 1;
				  
				  }
				  else{
				  
				  contenuto2 = contenuto2 + "<table width='98%' height='100%' border='0' valign='center' align='center' class='div8'><tr><td width='100%' align='center' colspan='2'>Nessuna Notifica Presente.</td></tr><tr><td width='100%' colspan='2'>Titolo della notifica</td></tr><tr><td><hr></td></tr><tr> <td width='100%' align='left'></td></tr><tr> <td width='100%'>&nbsp;</td></tr><tr><td width='100%' align='center' colspan='2'></td></tr></table>"
				  }
		   
		   $("#contenuto2").html(contenuto2);
		   
		   
		   var myScroll5;
		   
		   myScroll5 = new iScroll('wrapper5', {
								   zoom: true,
								   click: true,
								   zoomMin:1,
								   zoomMax:2
			});
		   setTimeout (function(){
				$(".spinner").hide();
				myScroll5.refresh();
			}, 700);
		   
		   
		   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		   
		   document.addEventListener('DOMContentLoaded', loaded, false);
		   

		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Nessuna Connessione Internet, Riprova Tra Qualche Minuto',  // message
										alertDismissed,         // callback
										'Connessione Internet',            // title
										'OK'                  // buttonName
										);
		   
		   
		   },
		   dataType:"json"});
}


function checkpush() {
	
	setTimeout (function(){
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/event_list/"+ localStorage.getItem("Token") +"",
		   //data: {token:localStorage.getItem("Token")},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.company_id!=0){
				  //OK
				  
					if(item.is_read==false){
					  $("#pushbutton").removeClass("pulsante3").addClass("pulsante3new");
					  return false;
					}
				  }
			});

		   
		   $(".spinner").hide();
		   
		   
		   },
		   error: function(jqxhr,textStatus,errorThrown){
		
		   //alert(ts.responseText)
		   
		   $(".spinner").hide();
		
		   navigator.notification.alert(
										'Nessuna Connessione Internet, Riprova Tra Qualche Minuto',  // message
										alertDismissed,         // callback
										'Connessione Internet',            // title
										'OK'                  // buttonName
										);
		   
		   },
		   dataType:"json"});
	   
	   }, 500);

}

function regToken() {
	var ciccio;
	var conta = 1;
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/device/set_token/PxgLiaL7dBgTYUzUyHZRNGIUlT5NIabyHrkZC57PHoJGiiAQZA/j7qIDp2jpS1AmQRCHcvZ8fqOTRAFImtFMC2nQWLU6cCQhJ3iBn/"+ localStorage.getItem("Token") +"",
		   //url:"http://interactivebusinessapp.it/device/set_token/{platform_code}/{company_code}/{device_token}",
		   //Android PxgLiaL7dBgTYUzUyHZRNGIUlT5NIabyHrkZC57PHoJGiiAQZA
		   //data: {token:localStorage.getItem("Token")},
		   //j7qIDp2jpS1AmQRCHcvZ8fqOTRAFImtFMC2nQWLU6cCQhJ3iBn
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
				'Nessuna Connessione Internet, Riprova Tra Qualche Minuto',  // message
				alertDismissed,         // callback
				'Connessione Internet',            // title
				'OK'                  // buttonName
			);
		   
		   },
		   dataType:"json"});
	   
	   setTimeout (function(){
		checkpush()
	   }, 1000);
}

function apri(){

	$("#pippo").show( "slow" );
}

function aprisms(){
	
	$("#pippo5").show("slow");
}

function aprisms0(){
	
	$("#pippo0").show("slow");
}

function chiudi(){
	
	$("#pippo").hide( "slow" );
}

function chiudi5(){
	
	$("#pippo5").hide("slow");
}

function chiudi0(){
	
	$("#pippo0").hide("slow");
}

function vedi () {
	var isMobileScreenWidth4 = (screen.width / window.devicePixelRatio)
		
	if(isMobileScreenWidth4 < 768){
		//alert(screen.width);
		//alert(screen.height);
	}
	else
	{
		//alert(screen.width);
		
		$("#testoTitolo3").attr("class", "visione2IPAD");
		$("#testo3").attr("class", "visioneIPAD");
	}
	
	var myScroll7;
	
	myScroll7 = new iScroll('wrapper7', {
							zoom: true,
							click: true,
							zoomMin:1,
							zoomMax:2
	});
	setTimeout (function(){
		myScroll7.refresh();
	}, 500);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
	
	//$("#altro").show();
	//myScroll.refresh();
	
}

function NoVedi () {
	myScroll.scrollTo(0,0);
	myScroll.refresh();
}


function aprifb () {
	var ref = window.open('https://www.facebook.com/', '_system', 'location=no');
}

function apritw () {
	var ref = window.open('https://twitter.com/TeSAvIT', '_system', 'location=no');
}

function aprili () {
	var ref = window.open('https://www.linkedin.com/company/tesav-s-r-l-?trk=biz-companies-cym', '_system', 'location=no');
}

function aprimail () {

window.plugin.email.open({
	to:      'info@tesav.it',
	subject: 'Contatto',
	body:    '<h1>Il tuo messaggio.</h1>',
	isHtml:  true
});


}

function mandasms () {
	
	chiudi5()
	
	window.plugins.socialsharing.shareViaSMS("Messaggio", "3355754505", function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)})
}

function aprimappa () {
	
	var addressLongLat = '41.913721, 12.459551';
	
	var refff = window.open("https://www.google.com/maps?q="+addressLongLat, '_system');
	
	refff.addEventListener('exit', function (event) {
		
		setTimeout (function(){
			refff.close();
		}, 500);
		
	});
	
}

function aprivideo1 () {
	
	var id = "cf5PVgbrlCM";
	var ref = window.open('http://www.youtube.com/embed/cf5PVgbrlCM?html5=1', '_system');
	
	ref.addEventListener('exit', function (event) {
		
		setTimeout (function(){
			ref.close();
		}, 500);
		
	});
	
}

function aprivideo2 () {
	
	var id = "Hl10lNEVBrU";
	var reff = window.open('http://www.youtube.com/embed/Hl10lNEVBrU?html5=1', '_system');
	
	reff.addEventListener('exit', function (event) {
		
		setTimeout (function(){
			reff.close();
		}, 500);
		
	});

}



