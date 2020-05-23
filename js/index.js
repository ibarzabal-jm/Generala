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


function esGenerala(jugada){
	return getCantidades(jugada).includes(5);
}

function esPoker(jugada){
	return getCantidades(jugada).includes(4);
}

function esFull(jugada){
	return getCantidades(jugada).includes(3) && getCantidades(jugada).includes(2);
}





let jugada = getJugada();

let contenedorJugada = document.getElementById("jugada");


for(let i=0; i < jugada.length; i++){

	contenedorJugada.innerHTML +=' '+jugada[i]+' ';

}

console.log(jugada);
console.log( getCantidades(jugada));

if (esGenerala(jugada)){
	console.log('Hay Generala');

}else if(esPoker(jugada)){
	console.log('Hay Poker');

}else if(esFull(jugada)){
	console.log('Hay Full');
} else {
	console.log('No hay nada PERDISTEEEE');
}

