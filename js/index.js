let btnJugar = document.getElementById('btn-jugar');
btnJugar.addEventListener('click', jugar);


function saludar(){
	console.log('Hola')
}


function getDado(){
		
	return Math.floor( Math.random() * 6 + 1);
}


function getJugada(){
	
	let jugada= new Array();
	
	for(let numDado = 0; numDado<5; numDado++){
		
		jugada.push( getDado() );
	}
	
	return jugada;	
}



function getCantidades(jugada){
	
	let cantidades= [0,0,0,0,0,0];
	
	jugada.forEach(
		function( dado ){
			cantidades[dado - 1]++;
			
		}
		);
		
		return cantidades;
	}

let analisis = getCantidades(jugada);
	
	
	function esGenerala(jugada){
		return analisis.includes(5);
	}
	
	function esPoker(jugada){
		return analisis.includes(4);
	}
	
	function esFull(jugada){
		return analisis.includes(3) && analisis.includes(2);
	}
	
	function esEscalera(jugada){
		return analisis
	}
	
	
	function jugar(){

		let jugada = getJugada();
			
		let contenedorJugada = document.getElementById("jugada");
			
		let contenedorResultado = document.getElementById("resultado");

		contenedorJugada.innerHTML='';
		
	
		
		
		for(let i=0; i < jugada.length; i++){
			
			contenedorJugada.innerHTML +=' '+jugada[i]+' ';
			
		}
		
		
		if (esGenerala(jugada)){
			contenedorResultado.innerHTML = 'Tu resultado es : Hay generala GANASETE'
		
		}else if(esPoker(jugada)){
			
			contenedorResultado.innerHTML = 'Tu resultado es : Hay Poker GANASETE'
		
		
		}else if(esFull(jugada)){
			
			contenedorResultado.innerHTML = 'Tu resultado es : Hay Full GANASETE'
		
		} else {
			
			contenedorResultado.innerHTML = 'Tu resultado es :PERDISTE'
		
		}
	}
	



console.log(jugada);
console.log( getCantidades(jugada));



