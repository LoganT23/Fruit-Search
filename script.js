const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
// create empty array
let results = [];
// loop through list
	for (let i=0; i < fruit.length; i++){
		let currentFruit = fruit[i];
		// convert the inputs and fruit to case sensitive lower case
		let lowerInput = str.toLowerCase();
		let lowerFruit = currentFruit.toLowerCase();
		if(lowerFruit.includes(lowerInput)){
			results.push(currentFruit);
		}
		}
	

	return results;
}

function searchHandler(e) {
	suggestions.firstElementChild.remove();
    // Find results
    let results = search(e.target.value);
	console.log(1, results)

	const ul = document.createElement('ul');

	for(let i = 0; i < results.length; i++){
		const li = document.createElement('li');
		li.textContent = results[i];
		ul.appendChild(li)
	}

	suggestions.appendChild(ul);
}

document.querySelector("input[name='fruit']").addEventListener("input", searchHandler);

function highlightSuggestion(e) {
    // Highlight the current suggestion
    e.target.style.backgroundColor = "lightblue";
}

input.addEventListener('keyup', searchHandler);