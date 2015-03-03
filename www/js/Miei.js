document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	document.addEventListener("resume", onResume, false);

	var email = localStorage.getItem("email");
	var id_Utente = 20;
	
	contenuto(id_Utente);
	
	$(".spinner").hide();

}

function alertDismissed() {
	
}

function onResume() {
	
}


function riepilogo(idProdotto,prov) {
	
	$(document).on('pagebeforeshow', function () {
		$(this).find('a[data-rel=back]').buttonMarkup({
		iconpos: 'notext'
		});
	});
	
	
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
				  if (item.ID==0){
				  $("#riepilogopost").html("Nessun prodotto acquistato.");
				  }
				  else{
				  
				  
				  $("#idheader3").html("<table id='idheader' height='50'><tr><td width='30px' align='center'></td><td width='240px' align='center' valign='middle'><font color='#FFFFFF' size='3'>"+ item.Nome +"</font></td><td width='50px' align='center' valign='middle'><img src='Tod10.png' width='22'></td></tr></table>");
				  
				  $("#riepilogopost").html("<img src='http://www.mistertod.it/img/"+ item.IMG +".png' width='320px' height='180px'><table width='100%' border='0' id='' align='center'><tr><td colspan='3'><font color='#454545' size='3'>"+ item.DescrizioneS +"</font></td></tr><tr><td colspan='3' align='left'><font color='#454545' size='2'>"+ item.Deal +"&euro;</font></td></tr><tr><td colspan='3'></td></tr><tr><td align='left'><font color='#FF8000' size='4'><b>Valido fino al "+ item.GiornoValidita +"/"+ item.MeseValidita +"</b></font></td><td align='right' colspan='2'><font color='#454545' size='2'>"+ item.Nome +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'><b>In Sintesi</b><hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Sintesi +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'><b>Dettagli</b><hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Dettagli +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'><b>Condizioni</b><hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Condizioni +"</font></td></tr></table>");
				  
				  if(prov==0){
					$("#idfooter3").html("<table id='idfooter' border='1'><tr><td width='200px' align='center'>Sospesa</td><td width='120px' align='center'><a href='#page4' onclick='javascript:riepilogo2("+ idProdotto +");' data-transition='slide' class='ui-btn ui-shadow ui-corner-all'>Acquista!</a></td></tr></table>");
				  }
				  else{
				  $("#idfooter3").html("<table id='idfooter' align='center'><tr><td width='100%' align='center' valign='bottom'><font color='#FFFFFF' size='3'>Acquistato</font></td></tr></table>");
				  }

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

function riepilogo2(idProdotto) {
	$("#idheader4").html("<table id='idheader' height='50'><tr><td width='30px' align='center'></td><td width='240px' align='center' valign='middle'><font color='#FFFFFF' size='3'>CONFERMA</font></td><td width='50px' align='center' valign='middle'><img src='Tod10.png' width='22'></td></tr></table>");
	
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
				  
				  $("#riepilogopay1").html("<font color='#454545' size='3'>"+ item.DescrizioneS +"</font>");
				  
				  $("#riepilogopay").html("<img src='http://www.mistertod.it/img/"+ item.IMG +".png' width='320px' height='180px'><table width='100%' border='0' id='' align='center'><tr><td align='left' colspan='2' width='220px'><font color='#454545' size='3'>Prezzo Totale: </font></td><td align='right' width='100px'><b>"+ item.Deal +"&euro;</b> </font></td><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><a href='#page' onclick='javascript:compra("+ idProdotto +");' class='zocial cart'>Carte</a><img src='http://www.mistertod.it/img/Visa.png' width='40'></td></tr><tr><td colspan='3' align='left'><font color='#454545' size='2'></font></td></tr><tr><td colspan='3'><a href='#page' onclick='javascript:compracc("+ idProdotto +");' class='zocial paypal'>Paga con Paypal</a><br></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3' align='center'><font size='1'>Accetto i nuovi termini di vendita</font></td></tr><tr><td colspan='3' align='center'><font size='1'>Informativa sulla Privacy</font></td></tr></table>");
				  
				  $("#idfooter4").html("<table id='idfooter' align='center'><tr><td width='100%' align='center' valign='bottom'><font color='#FFFFFF' size='1'>La transazione avviene con connessione sicura</font></td></tr></table>");
				  
				  }
				  else{
				  $("#riepilogopay").html("Nessun risultato trovato");
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

function contenuto(id_utente) {
	$(".spinner").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_MieTransazioni.asp",
		   contentType: "application/json",
		   data: {ID:id_utente},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				
				  if(item.Voucher==0){
				  var landmark = "<li><a href='#page3' onclick='javascript:riepilogo("+ item.Cod_Prodotto +",0);' ><img src='http://www.mistertod.it/img/"+ item.IMG +".png' width='200' height='200' class='imgcut'><h2>"+ item.Nome +"</h2><p>"+ item.Tot +"</p></a></li>";
				  }
				  else{
				  var landmark = "<li><a href='#page3' onclick='javascript:riepilogo("+ item.Cod_Prodotto +",1);' ><img src='http://www.mistertod.it/img/"+ item.IMG +".png' width='200' height='200' class='imgcut'><h2>"+ item.Nome +"</h2><p>"+ item.Tot +"</p></a></li>";
				  }
				  
				  $("#contenuto").append(landmark);
			});
	
	       $("#contenuto").listview('refresh');
		   
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
