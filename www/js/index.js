/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		document.addEventListener("resume", onResume, false);
        app.receivedEvent('deviceready');
		
		var loginfacebook = localStorage.getItem("loginfacebook");
		//alert(loginfacebook);
		
		if (loginfacebook == "SI") {
			
			document.getElementById("userPic").src = 'http://graph.facebook.com/' + localStorage.getItem("pics") + '/picture?type=small';
			$("#Nome").html(localStorage.getItem("nome"));
			//$("#EmailCliente").html(localStorage.getItem("email"));
			
		}
		else{
			var loginvera = localStorage.getItem("loginvera");
			//alert(localStorage.getItem("nome"));
			
			if (loginvera == "SI") {
				$("#Nome").html(localStorage.getItem("nome"));
				document.getElementById("userPic").src = 'Tod10.png';
				//localStorage.setItem("idfacebook", "")@
				//alert("exit");
				//$(document).FaceGap('logout');
			}
		}
		
		window.location.href = "#page7";

		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		
		document.addEventListener("showkeyboard", function(){ $("[data-role=footer]").hide();}, false);
		document.addEventListener("hidekeyboard", function(){ $("[data-role=footer]").show();}, false);
		
		// Workaround for buggy header/footer fixed position when virtual keyboard is on/off
		$('input, select')
		.on('focus', function (e) {
			$('header, footer').css('position', 'absolute');
			})
		.on('blur', function (e) {
			$('header, footer').css('position', 'fixed');
			//force page redraw to fix incorrectly positioned fixed elements
			setTimeout( function() {
        window.scrollTo( $.mobile.window.scrollLeft(), $.mobile.window.scrollTop() );
					   }, 20 );
			});
	
		
		$(document).keydown(function (eventObj){
			getKey(eventObj);
		});
		
		var email = localStorage.getItem("email");
		var ciao = "";
		var ciao1 = "";
		var distanza = "";
		openFB.init({appId: '410848245732219'});
		var Categoria="";
		var Provincia="";
		
		if((email=="")||(!email)){
			$("#btnprofilo").attr("href", "#page4");
			$("#btnprofilo").attr("onclick", "javascript:checklogin();");
		}else{
			$("#btnprofilo").attr("href", "#mypanel");
			$("#btnprofilo").attr("onclick", "#");
		}
		
		var filtro = '<table id="filtroTB" width="320px" align="center"><tr><td width="160px"><select id="Categoria" name="Categoria" data-theme="b"><option value="All" selected>Schegli Tra</option><option value="Ristoranti">Ristoranti</option><option value="Hotel">Hotel e Spa</option><option value="Eventi">Eventi</option><option value="Sport">Sport</option><option value="Salute">Bellezza</option><option value="Corsi">Corsi</option></select></td><td width="160px"><select id="Provincia" name="Provincia" data-theme="b"><option value="Tutte" selected>Provincia</option><option value="Roma">Roma</option><option value="Napoli">Napoli</option><option value="Agrigento">Agrigento</option></select></td><td width="80px" align="left"></td></tr></table>';
		
		$('#selezione').html(filtro);

		
		//$(window).scroll(function() {
			//if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
				//$(".spinner").show();
			//}
		//});
		
		//alert(localStorage.getItem("Categoria") + localStorage.getItem("Provincia"));
		
		if (localStorage.getItem("Categoria") === null || typeof(localStorage.getItem("Categoria")) == 'undefined') {
			$("#Categoria").val("All");
		}
		else{
			$("#Categoria").val(localStorage.getItem("Categoria"));
		}
		
		if (localStorage.getItem("Provincia") == null || typeof(localStorage.getItem("Provincia")) == 'undefined') {
			$("#Provincia").val("Tutte");
		}
		else{
			$("#Categoria").val(localStorage.getItem("Categoria"));
		}
		
		
		$('#Categoria').on('change', function(){
          var $this = $(this),
          $value = $this.val();
		  //alert($value);
		  Categoria = $value;
		  localStorage.setItem("Categoria", Categoria)
		  buildprodotto(Categoria,localStorage.getItem("Provincia"));
		});
		
		$('#Provincia').on('change', function(){
		  var $this = $(this),
		  $value = $this.val();
		  //alert($value);
		  Provincia = $value;
		  localStorage.setItem("Provincia", Provincia)
		  buildprodotto(localStorage.getItem("Categoria"),Provincia);
		});
		
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
			checkPos();
			$(".spinner").hide();
			buildprodotto(localStorage.getItem("Categoria"),localStorage.getItem("Provincia"));
		}
		else{
			$('#noconn').show();
			
			var tabella = '<table align="center" border="0" width="310px" height="60px" class="conn">';
			tabella = tabella + '<tr><td align="center" width="50px"><img src="images/wire.png" width="32px"></td><td align="left"><font color="white" size="2">Nessuna connessione attiva</font></td><td><a href="javascript:verificawifi()"><div width="40px" class="home"></div></a></td></tr>';
			tabella = tabella + '</table>';
			
			$('#noconn').html(tabella);
			
			$("#verifica").bind ("click", function (event)
				{
				var connectionStatus = false;
				connectionStatus = navigator.onLine ? 'online' : 'offline';
								 
				if(connectionStatus=='online'){
					app.initialize();
				}
				else{
					$(".spinner").hide();
								 
					navigator.notification.alert(
						'Nessuna connessione ad internet rilevata',  // message
						alertDismissed,         // callback
						'Attenzione',            // title
						'OK'                  // buttonName
                 );
				}
								 
			 });
			
			
			$(".spinner").hide();
			
		}
    }
	
};


function alertDismissed() {
	
}

function onResume() {
	app.initialize();
}

function checkPos() {
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError, {maximumAge:600000, timeout:80000, enableHighAccuracy: true });
	
	function onSuccess(position) {
		ciao = position.coords.latitude;
		ciao1 = position.coords.longitude;
		
		localStorage.setItem("lat", ciao)
		localStorage.setItem("lng", ciao1)
		
		localStorage.setItem("geostory", "SI")
		
		//alert('Lat' + ciao + 'Lng' + ciao1);
	}
	
	
	function onError(error) {
		
		localStorage.setItem("geostory", "NO")
	}
	
}

function getDistance(lat1,lon1,lat2,lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2-lat1);  // deg2rad below
	var dLon = deg2rad(lon2-lon1);
	var a =
	Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
	Math.sin(dLon/2) * Math.sin(dLon/2)
	;
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c; // Distance in km
	return d;
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}

function send() {
	window.plugin.email.open({
	 to:      ['info@pokeranswer.it'],
	subject: 'Contatto',
	body:    'Scrivici pure, risponderemo alle tue domande nel piu breve tempo possibile...<br><br>TeamPokerAnswer<br><img src="http://www.pokeranswer.it/img/logo256.png" width="80px">',
	isHtml:  true
});
}

function apri() {
	var pagina = "donazione";
	var ref = window.open('http://www.pokeranswer.it/live/'+ pagina +'.asp', '_blank', 'location=no');
	//www.pokeranswer.it/live/aams.html
}

function prodotto(idProdotto) {
	
$(document).on('pagebeforeshow', function () {
		$(this).find('a[data-rel=back]').buttonMarkup({
	iconpos: 'notext'
	});
});
	
	var landmark2 ="";
	$(".spinner").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Prodotto.asp",
		   contentType: "application/json",
		   data: {ID:idProdotto},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  	$("#idheader").html("<table id='idheader' height='50'><tr><td width='30px' align='center'></td><td width='240px' align='center' valign='middle'><font color='#FFFFFF' size='3'>"+ item.Nome +"</font></td><td width='50px' align='center' valign='middle'><img src='Tod10.png' width='22'></td></tr></table>");
				  
					$("#prodotto").html("<img src='http://www.mistertod.it/img/"+ item.IMG +".png' width='320px' height='180px'><table width='100%' border='0' id='' align='center'><tr><td colspan='3'><font color='#454545' size='3'>"+ item.DescrizioneS +"</font></td></tr><tr><td colspan='3' align='left'><font color='#454545' size='2'>Valore: <strike>"+ item.Valore +"</strike></font></td></tr><tr><td colspan='3'></td></tr><tr><td align='left'><font color='#FF8000' size='4'><b>"+ item.Deal +"&euro; </b></font></td><td align='right' colspan='2'><font color='#454545' size='2'>"+ item.Nome +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>In Sintesi<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Sintesi +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>Dettagli<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Dettagli +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>Condizioni<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Condizioni +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3' align='center'><a href='javascript:condividi();' class='zocial facebook'>Condividi su Facebook</a></td></tr></table>");
				  
					$("#clock").countdown("2015/"+ item.MeseScadenza +"/"+ item.GiornoScadenza +" "+ item.OraScadenza +":"+ item.MinutiScadenza +":00", function(event) {
							$(this).html(event.strftime('%D giorni %H:%M:%S'));
					});
				  
				  });
		   
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
			'Possibile errore di rete, riprova tra qualche minuto',  // message
			 alertDismissed,         // callback
			 'Attenzione',            // title
			 'Done'                  // buttonName
			);
		   
		   },
		   dataType:"jsonp"});

	
	$("#idfooter").html("<table id='idfooter' border='1'><tr><td width='200px' align='center'><span id='clock'></span></td><td width='120px' align='center'><a href='#page3' onclick='javascript:riepilogo("+ idProdotto +");' data-transition='slide' class='ui-btn ui-shadow ui-corner-all'>Acquista!</a></td></tr></table>");
	
}

function riepilogo(idProdotto) {
	
	
	$(document).on('pagebeforeshow', function () {
		$(this).find('a[data-rel=back]').buttonMarkup({
		iconpos: 'notext'
		});
	});
	
	
	$("#idheader3").html("<table id='idheader' height='50'><tr><td width='30px' align='center'></td><td width='240px' align='center' valign='middle'><font color='#FFFFFF' size='3'>CONFERMA</font></td><td width='50px' align='center' valign='middle'><img src='Tod10.png' width='22'></td></tr></table>");
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Riepilogo.asp",
		   contentType: "application/json",
		   data: {ID:idProdotto},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  if (item.ID != 0){
				  
				  $("#riepilogo1").html("<font color='#454545' size='3'>"+ item.DescrizioneS +"</font>");
				  
				  $("#riepilogo").html("<img src='http://www.mistertod.it/img/"+ item.IMG +".png' width='320px' height='180px'><table width='100%' border='0' id='' align='center'><tr><td align='left' colspan='2' width='220px'><font color='#454545' size='3'>Prezzo Totale: </font></td><td align='right' width='100px'><b>"+ item.Deal +"&euro;</b> </font></td><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><a href='#page' onclick='javascript:compracc("+ idProdotto +");' class='zocial cart'>Carte</a><img src='http://www.mistertod.it/img/Visa.png' width='40'></td></tr><tr><td colspan='3' align='left'><font color='#454545' size='2'></font></td></tr><tr><td colspan='3'><a href='#page' onclick='javascript:compra("+ idProdotto +");' class='zocial paypal'>Paga con Paypal</a><br></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3' align='center'><font size='1'>Accetto i nuovi termini di vendita</font></td></tr><tr><td colspan='3' align='center'><font size='1'>Informativa sulla Privacy</font></td></tr></table>");
				  
					$("#idfooter3").html("<table id='idfooter' align='center'><tr><td width='100%' align='center' valign='bottom'><font color='#FFFFFF' size='1'>La transazione avviene con connessione sicura</font></td></tr></table>");
				  
				  }
				  else{
				  $("#riepilogo").html("Nessun risultato trovato");
				  }
				  
				  });
		   
		   $(".spinner").hide();
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
			'Possibile errore di rete, riprova tra qualche minuto',  // message
			alertDismissed,         // callback
			'Attenzione',            // title
			'Done'                  // buttonName@
		   );
		   
		   },
		   dataType:"jsonp"});
	
}

function compra(idProdotto) {
	var num1 = Math.floor((Math.random() * 20) + 1);
	var num2 = Math.floor((Math.random() * 20) + 1);
	var num3 = Math.floor((Math.random() * 20) + 1);
	var num4 = Math.floor((Math.random() * 20) + 1);
	var num5 = Math.floor((Math.random() * 20) + 1);
	var num6 = Math.floor((Math.random() * 20) + 1);
	
	transazioneprodotto = num1+""+num2+""+num3+""+num4+""+num5+""+num6;
	
	var item_number= transazioneprodotto;
	//prendere il nome prodotto e il prezzo con WS per passare al pagina di pagamento
	var amount = "";
	var nome = "";
	var email = localStorage.getItem("email");
	var EmailEsercente = "";
	
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Prodotto.asp",
		   contentType: "application/json",
		   data: {ID:idProdotto},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  amount = item.Deal;
				  nome = item.Nome;
				  EmailEsercente = item.EmailEsercente;
				  
				  vendoPayPal(idProdotto,nome,amount,transazioneprodotto,item_number,email,EmailEsercente);
			});
		   
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});

}

function vendoPayPal(idProdotto,nome,amount,transazioneprodotto,item_number,email,EmailEsercente){
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Transaction.asp",
		   contentType: "application/json",
		   data: {email:email,id_prodotto:idProdotto,qta:1,tot:amount.replace(".",","),trans:transazioneprodotto,NomeProdotto:nome,EmailEsercente:EmailEsercente},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  if (item.Token == "1024"){
				  var ref = window.open('http://www.mistertod.it/wbspaypal.asp?Transprodotto='+ transazioneprodotto +'&Nome='+ nome +'', '_blank', 'location=no');
				  }
				  else{
				  alert(item.Token);
				  }
				  
				  });
		   
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
}


function compracc(idProdotto) {
	var num1 = Math.floor((Math.random() * 20) + 1);
	var num2 = Math.floor((Math.random() * 20) + 1);
	var num3 = Math.floor((Math.random() * 20) + 1);
	var num4 = Math.floor((Math.random() * 20) + 1);
	var num5 = Math.floor((Math.random() * 20) + 1);
	var num6 = Math.floor((Math.random() * 20) + 1);
	
	transazioneprodotto = num1+""+num2+""+num3+""+num4+""+num5+""+num6;
	
	var item_number= transazioneprodotto;
	var amount = "";
	var nome = "";
	var email = localStorage.getItem("email");
	var EmailEsercente = "";
	
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Prodotto.asp",
		   contentType: "application/json",
		   data: {ID:idProdotto},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  amount = item.Deal;
				  nome = item.Nome;
				  EmailEsercente = item.EmailEsercente;
				  
				  vendoCC(idProdotto,nome,amount,transazioneprodotto,item_number,email,EmailEsercente);
				  });
		   
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});

	
}

function vendoCC(idProdotto,nome,amount,transazioneprodotto,item_number,email,EmailEsercente){
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Transaction.asp",
		   contentType: "application/json",
		   data: {email:email,id_prodotto:idProdotto,qta:1,tot:amount.replace(".",","),trans:transazioneprodotto,NomeProdotto:nome,EmailEsercente:EmailEsercente},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  if (item.Token == "1024"){
				   var ref = window.open('http://www.mistertod.it/wbssella.asp?Transprodotto='+ transazioneprodotto +'', '_blank', 'location=no');
				  }
				  else{
				  alert(item.Token);
				  }
				  
				  });
		   
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
}



function checklogin() {
	$(document).on('pagebeforeshow', function () {
		$(this).find('a[data-rel=back]').buttonMarkup({
		iconpos: 'notext'
	});
});
	
	$("#idheader4").html("<table id='idheader' height='50'><tr><td width='320px' align='center' valign='middle'><font class='fontsforweb_fontid_2802' color='#FFFFFF' size='5.5'>Mister Tod</font></span></td></tr></table>");
	
	var emailutente = "";
	
	if(emailutente==""){
		
		$("#datilogin").html("<a href='javascript:loginFacebook();' class='zocial facebook'>Login Facebook</a>")

	}else{
		$("#btnprofilo4").attr("href", "#page");

	}
}

function login() {
	
	var email2 = self.document.formia2.email.value;
	var pin2 = self.document.formia2.password.value;
	
	if (email2 == "") {
		navigator.notification.alert(
									 'inserire Email',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	
	if (pin2 == "") {
		navigator.notification.alert(
									 'inserire un Pin',  // message
									 alertDismissed,         // callback
									 'Pin',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	EmailAddr = self.document.formia2.email.value;
	Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
	if (Filtro.test(EmailAddr)) {
		
	}
	else {
		navigator.notification.alert(
									 'Caratteri email non consentiti',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}

		LoginVera(email2,pin2);
	
}

function LoginVera(email,pin){
	$('#spinner').show();
	//alert("Login");
	
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Login.asp",
		   contentType: "application/json",
		   data: {email:email,pin:pin},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				if (item.Token == '1024'){
				  if (item.Attivo == '1'){
					localStorage.setItem("loginvera", "SI")
					$("#datilogin").html("Ciao "+item.Nome)
				  
				   $("#Nome").html(item.Nome);
				   localStorage.setItem("nome", item.Nome);
				   $("#EmailCliente").html(email);
				  localStorage.setItem("email", email);
				  
					$("#btnprofilo").attr("href", "#mypanel");
					$("#btnprofilo").attr("onclick", "#");
					$("#campireg").hide();
					$("#userPic").hide();
					window.location.href = "#page";
				  }
				  else{
					navigator.notification.alert(
											   'Credenziali non corrette',  // message
											    alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName@
											   );
				  }
				}
				else{
				}
			});

		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
}

function buildprodotto(Categoria,Provincia) {
	//alert(Categoria + " " + Provincia);
	
	var idProdotto = 1;
	var landmark2 ="";
	$(".spinner").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Home2.asp",
		   contentType: "application/json",
		   data: {Categoria:Categoria,Provincia:Provincia,Pagina:1},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				if (item.ID != 0){
				  distanza = getDistance(localStorage.getItem("lat"),localStorage.getItem("lng"),41.874764,12.477965).toFixed(1);
				  
				  //landmark2 = landmark2 + item.Cod_Prodotto + item.IMG + item.Descrizione + item.Provincia + item.Valore + distanza + item.Deal;
				  
				  landmark2 = landmark2 + "<a style='text-decoration: none;' href='#page2' onclick='javascript:prodotto("+ item.Cod_Prodotto +");' data-transition='slide'><img src='http://www.mistertod.it/img/"+ item.IMG +".png' width='330px' height='180px'><table height='30px' border='0' width='320px'><tr><td align='left' colspan='2'><font size='3' color='#454545'>"+ item.Descrizione +"</font></td></tr><tr><td align='left' width='160px'><font size='2' color='#454545'>"+ item.Nome +"</font></td><td align='right'><font size='2' color='#454545'>Valore: <strike>"+ item.Valore +"&euro;</strike></font></font></td></tr><tr><td align='left' width='160px'><font size='2' color='#454545'>Distanza:Km "+ distanza +" </font></td><td align='right'><font size='4' color='#FF8000'>"+ item.Deal +" &euro;</font></td></tr></table></a><br><hr class='div3'>";
				}
				else{
				  landmark2 ="Nessun risultato trovato";
				}
				
			});
		   
		   $(".spinner").hide();
		   $("#classifica").html(landmark2)
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});

}

function condividi() {
	alert('condiviso');
}

function chie() {
	
	$(document).on('pagebeforeshow', function () {
			$(this).find('a[data-rel=back]').buttonMarkup({
			iconpos: 'notext'
			 });
	});
	
	
	$("#idheader5").html("<table id='idheader' height='50'><tr><td width='320px' align='center' valign='middle'><font color='#FFFFFF' size='3'>Chi e' MisterTod</font></td></tr></table>");
	
	$("#idfooter5").html("<table id='idfooter' align='center'><tr><td width='320px' align='center'><font size='2'>© MisterTod di PokerParade. Tutti i diritti riservati</font></td></tr></table>");
	
}

function loginFacebook() {
	localStorage.setItem("loginfacebook", "SI")
	
	openFB.login(
	function(response) {
	if(response.status === 'connected') {
			getInfo();
	} else {
				navigator.notification.alert(
				'Al momento non puoi collegarti a Facebook',  // message
				alertDismissed,         // callback
				'Attenzione',            // title
				'OK'                  // buttonName
				);
		}
	}, {scope: 'email'});
	
	//app.initialize();
}

function getInfo() {
	openFB.api({
			path: '/me',
			success: function(data) {
			console.log(JSON.stringify(data));
			   
			   //document.getElementById("userName").innerHTML = data.name;
			   //document.getElementById("userMail").innerHTML = data.email;
			   //document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=small';
			   
			document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=small';
			localStorage.setItem("pics", data.id)
			$("#datilogin").html("Ciao" + " " + data.name)
			   
			$("#Nome").html(data.name)
			localStorage.setItem("nome", data.name)
			$("#EmailCliente").html(data.email)
			localStorage.setItem("email", data.email)
			   
			$("#btnprofilo").attr("href", "#mypanel");
			$("#btnprofilo").attr("onclick", "#");
			iscrivitiFB(data.email,data.name)
			   
			},
		error: errorHandler});
}



function logoutFacebook() {
	
	openFB.logout(
		function() {
			$("#datilogin").html("<a href='javascript:loginFacebook();' class='zocial facebook'>Login Facebook</a>")
			localStorage.setItem("email", "")
			localStorage.setItem("loginfacebook", "NO")
			localStorage.setItem("loginvera", "NO")
			$("#campireg").show();
			$("#userPic").hide();
			location.reload();
		},
	errorHandler);
}

function compraFB() {
	var pagina = "donazione";
	var ref = window.open('http://www.facebook.com', '_blank', 'location=no');
	
}

function errorHandler(error) {
	navigator.notification.alert(
								 'Possibile errore di rete, riprova tra qualche minuto',  // message
								 alertDismissed,         // callback
								 'Attenzione',            // title
								 'Done'                  // buttonName
								 );
}

function getKey(key){
	if ( key == null ) {
		keycode = event.keyCode;
		
	} else {
		keycode = key.keyCode;
	}
	
	if (keycode ==13){
		
		login();
		return false;
	}
	
}

function iscriviti(){
	$('#spinner').show();
	
	var emailreg = self.document.formia.emailreg.value;
	var pinreg = self.document.formia.Password.value;
	var nomereg = self.document.formia.nome.value;
	
	if (emailreg == "") {
		navigator.notification.alert(
									 'inserire Email',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	
	if (pinreg == "") {
		navigator.notification.alert(
									 'inserire un Pin',  // message
									 alertDismissed,         // callback
									 'Pin',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	if (nomereg == "") {
		navigator.notification.alert(
									 'inserire il Nome',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	EmailAddr = self.document.formia.emailreg.value;
	Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
	if (Filtro.test(EmailAddr)) {
		
	}
	else {
		navigator.notification.alert(
									 'Caratteri email non consentiti',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Reg.asp",
		   contentType: "application/json",
		   data: {email:emailreg,nome:nomereg,pin:pinreg},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				if (item.Token == '1024'){

				  navigator.notification.alert(
				  'Ti verra mandata un email di attivazione',  // message
				  alertDismissed,         // callback
				  'registrazione Eseguita',            // title
				  'Done'                  // buttonName
				  );
				  
				  window.location.href = "#page";
				}
				else{
				  navigator.notification.alert(
					'Cliente gia registrato',  // message
					alertDismissed,         // callback
					'Attenzione',            // title
					'Done'                  // buttonName
					 );
				}
			});
		   
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
}

function iscrivitiFB(emailfb,nomefb){
	$('#spinner').show();
	
	var emailreg = emailfb;
	var pinreg = "01010101";
	var nomereg = nomefb;
	

	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Reg.asp",
		   contentType: "application/json",
		   data: {email:emailreg,nome:nomereg,pin:pinreg},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				window.location.href = "#page";
			});
		   
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName@
										);
		   
		   },
		   dataType:"jsonp"});
}

function step1() {
	
	localStorage.setItem("step1", "GO")
	localStorage.setItem("ProvSte1", document.getElementById("ProvStep1").value)
	
	localStorage.setItem("Provincia", localStorage.getItem("ProvSte1"))


}


function step1bis() {
	
	localStorage.setItem("step1", "GO")
	
	localStorage.setItem("Provincia", "Roma")
	
	
}


function step2() {
	
	localStorage.setItem("step2", "GO")
	var indirizzo = self.document.formia8.emailMail.value;
	
	if (indirizzo == "") {
		navigator.notification.alert(
									 'inserire Email',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}
	
	EmailAddr = self.document.formia8.emailMail.value;
	Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
	if (Filtro.test(EmailAddr)) {
		
	}
	else {
		navigator.notification.alert(
									 'Caratteri email non consentiti',  // message
									 alertDismissed,         // callback
									 'Email',            // title
									 'OK'                  // buttonName
									 );
		return;
	}


	
	//alert(indirizzo);
	//alert(localStorage.getItem("ProvSte1"));
	localStorage.setItem("Provincia", localStorage.getItem("ProvSte1"));
	localStorage.setItem("Categoria", "All");
	
	$(".spinner8").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Newsletter.asp",
		   contentType: "application/json",
		   data: {email:indirizzo,prov:localStorage.getItem("ProvSte1")},
		   //data: {ID: $value},
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
					$.each(result, function(i,item){
						   window.location.href = "#page";
					});
				$("#spinner8").hide();
			  },
		   error: function(){
		   alert('Al momento non è possibile elaborare la richiesta');
		   },
		   dataType:"jsonp"});
	
	
}

function step2bis() {
	
	localStorage.setItem("step2", "GO");
	localStorage.setItem("Categoria", "All");
}
