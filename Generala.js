function getDado(){
	return Math.floor( Math.random() * 6 + 1 );
}

function getJugada(){
	let jugada = new Array();

	for(let numDado = 0; numDado < 5; numDado++){
		jugada.push( getDado() );
	}

	return jugada;
}

function getCantidades(jugada){
	let cantidades = [0, 0, 0, 0, 0, 0];

	jugada.forEach( 
					
					function( dado ){
						cantidades[dado - 1]++;
					}

				   );

	return cantidades;
}

function estaIncluido(jugada, valor){

	let i=0;
	let encontrado = false;

	do{
		if ( jugada[i] == valor ){
			encontrado = true;
		}

		i++;
	}while( !encontrado && i < jugada.length );

	return encontrado;

}

function esGenerala(jugada){
	//return getCantidades(jugada).includes(5);

	return estaIncluido( getCantidades(jugada) , 5);
}

function esPoker(jugada){
	return getCantidades(jugada).includes(4);
}

function esFull(jugada){
	return getCantidades(jugada).includes(3) && getCantidades(jugada).includes(2);
}

let jugada = getJugada();

console.log(jugada);

let contenedorJugada = document.getElementById("jugada");

for(let i=0; i<jugada.length; i++){
	contenedorJugada.innerHTML += '<img src="dados/dado' + jugada[i] + '.png"></img>';
}


let resultadoJugada = document.getElementById("resultado");

if( esGenerala(jugada) ){
	resultadoJugada.innerHTML = 'Hay generala';

}else if( esPoker(jugada) ){
	resultadoJugada.innerHTML = 'Hay Poker';

}else if( esFull(jugada) ){
	resultadoJugada.innerHTML = 'Hay Full';
}else{
	resultadoJugada.innerHTML = 'No hay ninguno';
}
