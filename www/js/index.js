
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
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		//document.addEventListener("resume", onResume, false);
        app.receivedEvent('deviceready');

		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		
		if(PushbotsPlugin.isiOS()){
			PushbotsPlugin.initializeiOS("55eef2521779597d478b456a");
		}
		if(PushbotsPlugin.isAndroid()){
			PushbotsPlugin.initializeAndroid("55eef2521779597d478b456a", "1068247241830");
		}
		
		
		var ciccio;
		
		/*last_click_time = new Date().getTime();
		
		document.addEventListener('click', function (e) {
								  
								  click_time = e['timeStamp'];
								  
								  if (click_time && (click_time - last_click_time) < 1000) { e.stopImmediatePropagation();
								  
								  e.preventDefault();
								  
								  return false;
								  
								  }
								  
								  last_click_time = click_time;
								  
								  }, true);*/

		
		// Workaround for buggy header/footer fixed position when virtual keyboard is on/off@
		$('input, select')
		.on('focus', function (e) {
			$('header, footer').css('position', 'absolute');
			})
		.on('blur', function (e) {
			$('header, footer').css('position', 'fixed');
			//force page redraw to fix incorrectly positioned fixed elements
			//setTimeout( function() {
			//window.scrollTo( $.mobile.window.scrollLeft(), $.mobile.window.scrollTop() );
			//		   }, 20 );
			});
	

		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
			
			
			$(".spinner").hide();
			
			checkpush(); 
			
			//provino()
			
			//alert("Work");
			
				/*PushbotsPlugin.getToken(function(token){
						
						alert(token);
						
						regToken(token);
				});*/
			
		}
		else{
			$('#noconn').show();
			
			var tabella = "<table align='center' border='0' width='100%' height='120px'>";
			tabella = tabella + "<tr><td align='center'><a href='javascript:riparti()' class='btn'><font color='#fff'>Connetti</font></a></td></tr>";
			tabella = tabella + "</table>";
			
			$('#noconn').html(tabella);
			

			$(".spinner").hide();
			
			$("#footer").show();
		}
    }
	
}


function verificawifi(){
	$("#verifica").click();
}


function onResume() {
	app.initialize();
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
	
	myScroll = new IScroll('#wrapper', { click: true });
				   
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
				   
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

}

function carica() {
	
	var myScroll2;

		myScroll2 = new iScroll('wrapper2', { click: true,zoom:true });
		setTimeout (function(){
			myScroll2.refresh();
		}, 1000);

	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
}

function carica2() {
	
	var myScroll3;
	
	myScroll3 = new iScroll('wrapper3', { click: true });
	setTimeout (function(){
		myScroll3.refresh();
	}, 500);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
}

function carica3() {
	provino()
	
	var myScroll4;
	
	myScroll4 = new iScroll('wrapper4', { click: true });
	setTimeout (function(){
		myScroll4.refresh();
	}, 1000);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
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

function carica5(id) {
	//alert(id)
	provino2(id)

}


function provino() {
	var ciccio;
	var conta = 1;
	
	var contenuto = ""

	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/event_list/tokendiprova",
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
					contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='220' align='center'><table width='100%' align='left' valign='center'><tr><td width='95%'>&nbsp;</td><td width='5%'></td></tr><tr><td width='100%' align='left' colspan='2' valign='center'><font size='3' color='#042e72'>"+ item.activated_at +" - "+ item.expire_on +" </font></td></tr><tr><td width='100%' colspan='2' valign='center'><font size='3'>"+ item.title +"</font> </td></tr></table></td><td width='120' align='center' valign='center'><img src='img/notRead.png' width='42px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  
					//ciccio = item.image_tag;
				  }
				  else{
					contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='220' align='center'><table width='100%' align='left' valign='center'><tr><td width='95%'>&nbsp;</td><td width='5%'></td></tr><tr><td width='100%' align='left' colspan='2' valign='center'><font size='3' color='#042e72'>"+ item.activated_at +" - "+ item.expire_on +" </font></td></tr><tr><td width='100%' colspan='2' valign='center'><font size='3'>"+ item.title +"</font> </td></tr></table></td><td width='120' align='center' valign='center'><img src='img/read.png' width='42px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  
					//ciccio = ciccio + item.image_tag;
				  }
				  
				  conta = conta + 1;
				  
				  }
				  else{
				  //alert(result.msg);
				  //window.location.href = "Froala/basic.html";
				  //self.document.formia2.emailL.value = localStorage.getItem("emailMemoria");
				  //window.location.href = "#article4";
				  
					contenuto = contenuto + "<tr title='http://path/to/download'><td width='220' align='center'><table width='100%' align='left' valign='center'><tr><td width='95%'>&nbsp;</td><td width='5%'></td></tr><tr><td width='100%' align='left' colspan='2' valign='center'><font size='3' color='#042e72'>Nessuna Notifica</font></td></tr><tr><td width='100%' colspan='2' valign='center'><font size='3'> </font> </td></tr></table></td><td width='120' align='center' valign='center'><img src='img/notRead.png' width='42px'></td></tr><tr><td colspan='2'><hr></td></tr>"
			}
				  
		   });
		   
		   $("#contenuto").html(contenuto);
		   
		   $(".spinner").hide();
		   
		   $("tr").click(function(event) {
				if(event.target.nodeName != "A"){
					if ($(this).attr("title") === null || typeof($(this).attr("title")) == 'undefined' || $(this).attr("title")==0){
				}
					else{
						 $.mobile.changePage( "#page5", { transition: "slide", changeHash: false });
						 carica5($(this).attr("title"))
					}
				}
			});
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'possible network error',  // message
										alertDismissed,         // callback
										'Error',            // title
										'OK'                  // buttonName
										);
		   
		   
		   },
		   dataType:"json"});
}

function provino2(id) {
	var ciccio;
	var conta = 1;
	
	var contenuto2 = ""
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/event_details/by_id/"+ id +"/tokendiprova",
		   //data: {token:localStorage.getItem("Token")},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){

				  if (result.company_id!=0){
					contenuto2 = contenuto2 + "<table width='98%' height='100%' border='0' valign='center' align='center' class='div8'><tr><td width='100%' align='center' colspan='2'><font size='3' color='#042e72'><b>"+ result.activated_at +" - "+ result.expire_on +"</b></font></td></tr><tr><td width='100%' colspan='2'><font size='3' color='#000'><b>"+ result.title +"</b></font></td></tr><tr><td><hr></td></tr><tr> <td width='100%' align='left'>"+ result.description +"</td></tr><tr> <td width='100%'>&nbsp;</td></tr><tr><td width='100%' align='center' colspan='2'><img src='http://interactivebusinessapp.it/event_image/full_size/by_tag/"+ result.image_tag +"' width='90%'></td></tr></table>"
				  
					conta = conta + 1;
				  
				  }
				  else{
				  
				  contenuto2 = contenuto2 + "<table width='98%' height='100%' border='0' valign='center' align='center' class='div8'><tr><td width='100%' align='center' colspan='2'>Nessuna Notifica</td></tr><tr><td width='100%' colspan='2'>Titolo della notifica</td></tr><tr><td><hr></td></tr><tr> <td width='100%' align='left'></td></tr><tr> <td width='100%'>&nbsp;</td></tr><tr><td width='100%' align='center' colspan='2'></td></tr></table>"
				  }
		   
		   $("#contenuto2").html(contenuto2);
		   
		   
		   var myScroll5;
		   
		   myScroll5 = new iScroll('wrapper5', { click: true, zoom:true });
		   setTimeout (function(){
				$(".spinner").hide();
				myScroll5.refresh();
			}, 1000);
		   
		   
		   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		   
		   document.addEventListener('DOMContentLoaded', loaded, false);
		   

		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'possible network error',  // message
										alertDismissed,         // callback
										'Error',            // title
										'OK'                  // buttonName
										);
		   
		   
		   },
		   dataType:"json"});
}


function regToken(token) {
	var ciccio;
	var conta = 1;
	
	alert(token);
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/device/set_token/PxgLiaL7dBgTYUzUyHZRNGIUlT5NIabyHrkZC57PHoJGiiAQZA/nD44CFruHMUPGbj213sd1kMiHygU41biNIThN36jWE2JPN8RZF/"+ token +"",
		   //url:"http://interactivebusinessapp.it/device/set_token/{platform_code}/{company_code}/{device_token}",
		   //Android PxgLiaL7dBgTYUzUyHZRNGIUlT5NIabyHrkZC57PHoJGiiAQZA
		   //data: {token:localStorage.getItem("Token")},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){


		   $(".spinner").hide();
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'possible network error',  // message
										alertDismissed,         // callback
										'Error',            // title
										'OK'                  // buttonName
										);
		   
		   window.location.href = "#article4";
		   
		   },
		   dataType:"json"});
}

function checkpush() {

	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/event_list/tokendiprova",
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
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'possible network error',  // message
										alertDismissed,         // callback
										'Error',            // title
										'OK'                  // buttonName
										);
		   
		   
		   },
		   dataType:"json"});
}

function apri(){

	$("#pluto").show();
	$("#pippo").slideToggle( "slow" );
}

function aprisms(){
	
	$("#pluto5").show();
	$("#pippo5").slideToggle("slow");
}

function chiudi(){
	
	$("#pluto").hide();
	$("#pippo").slideToggle( "slow" );
}

function chiudi5(){
	
	$("#pluto5").hide();
	$("#pippo5").slideToggle("slow");
}

function vedi () {
	$("#altro").show();
	myScroll.refresh();
}

function NoVedi () {
	$("#altro").hide();
	myScroll.scrollTo(0,0);
	myScroll.refresh();
}


function aprifb () {
	var ref = window.open('https://www.facebook.com/domenico.putignano.52', '_system', 'location=no');
}

function apritw () {
	var ref = window.open('https://www.facebook.com/domenico.putignano.52', '_system', 'location=no');
}

function aprili () {
	var ref = window.open('https://www.facebook.com/domenico.putignano.52', '_system', 'location=no');
}

function aprimail () {

window.plugin.email.open({
	to:      'max@mustermann.de',
	subject: 'Greetings',
	body:    '<h1>Nice greetings from Leipzig</h1>',
	isHtml:  true
});


}

function mandasms () {
	window.plugins.socialsharing.shareViaSMS("My cool message", "0612345678", function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)})
}





