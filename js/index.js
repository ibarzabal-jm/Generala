let btnJugar = document.getElementById('btn-jugar');
btnJugar.addEventListener('click', jugar);


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

function hacerEscalera(jugada){
	let valor=2; // poner 1 o 2 dependiendo si quiere salir [1,2,3,4,5] o [2,3,4,5,6]

	jugada.forEach(
		function(elemento,indice, jugada){

			jugada[indice] = valor++;
		}
	)

	jugada=[2,3,5,6,4];
	return jugada;
}


	
	
	function esGenerala(analisis){
		return analisis.includes(5);
	}
	
	function esPoker(analisis){
		return analisis.includes(4);
	}
	
	function esFull(analisis){
		return analisis.includes(3) && analisis.includes(2);
	}

	function contador(){
		let contado

		return contador;
	}
	
	/*
	function esEscalera(analisis){
		let cuenta = 0;

		let escalera=false;

		analisis.forEach(
			function(elemento){
				if(elemento == 1){
					cuenta++;
				}
			}
		)

		if(cuenta = 5){
			escalera = true;

		}else{
			escalera = false;
		}

		return escalera;
	}
	*/


	function arraysIguales(arr1, arr2){
		
		for (var i = 0, len = arr1.length; i < len; i++){
			if (arr1[i] !== arr2[i]){
				return false;
			}
		}
		return true; 
	}

	function esEscalera(jugada){
		

		jugada.sort((a, b) => a - b);
		
		let valor=[1,2,3,4,5];
		let valor2=[2,3,4,5,6];

		return (arraysIguales(jugada,valor) || arraysIguales(jugada,valor2));
	}
	
	function jugar(){

		let jugada = getJugada();
		
		jugada = hacerEscalera(jugada);

		let analisis = getCantidades(jugada);
			
		let contenedorJugada = document.getElementById("jugada");

		let contenedorAnalisis = document.getElementById("analisis");
			
		let contenedorResultado = document.getElementById("resultado");

		contenedorJugada.innerHTML='';
		contenedorAnalisis.innerHTML='';

		
		
		
		for(let i=0; i < jugada.length; i++){
			
			contenedorJugada.innerHTML +=' '+jugada[i]+' ';
			
		}
		


		for(let i=0; i < analisis.length; i++){
			
			contenedorAnalisis.innerHTML +=' '+analisis[i]+' ';
			
		}

		if (esGenerala(analisis)){
			contenedorResultado.innerHTML = 'Tu resultado es : Hay generala GANASETE'
		
		}else if(esPoker(analisis)){
			
			contenedorResultado.innerHTML = 'Tu resultado es : Hay Poker GANASETE'
		
		
		}else if(esFull(analisis)){
			
			contenedorResultado.innerHTML = 'Tu resultado es : Hay Full GANASETE'
		
		} else {
			
			contenedorResultado.innerHTML = 'Tu resultado es :PERDISTE';
			if(esEscalera(jugada)){
				contenedorResultado.innerHTML = 'ESCALERA';
			}
		
		}

		
	}
	






