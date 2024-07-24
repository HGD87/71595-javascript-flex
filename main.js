// Variables y constantes
const lista = document.getElementById('miLista');
let contadorItems = 0;

// Función para agregar un ítem a la lista
function agregarItem() {
	const nuevoItem = document.getElementById('nuevoItem').value;

	if (nuevoItem === '') {
		alert('Por favor, ingresá un ítem o no me hagas perder tiempo');
		return;
	}

	const li = document.createElement('li');
	li.textContent = `${nuevoItem} (Item ${++contadorItems})`;
	lista.appendChild(li);

	console.log(`Se agregó el ítem: ${nuevoItem}`);

	// Preguntar si desea agregar otro item
	if (confirm('¿Querés agregar otro item?')) {
		document.getElementById('nuevoItem').value = '';
	}
}

// Función para eliminar todos los items
function eliminarTodos() {
	if (confirm('¿Estás seguro de que querés eliminar todos los ítems?')) {
		lista.innerHTML = '';
		contadorItems = 0;
		console.log('Todos los items se fueron, sus planetas los necesitan.');
	}
}