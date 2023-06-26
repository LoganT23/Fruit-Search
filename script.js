const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
// create empty array
let results = [];
// loop through list
	for (let i=0; i < fruit.length; i++){
		let fruit = fruitList[i];
		// convert the inputs and fruit to case sensitive lower case
		let lowerInput = input.toLowerCase();
		let lowerFruit = fruit.toLowerCase();
		if(lowerFruit.includes(lowerInput)){
			results.push(fruit);
		}
		}
	

	return results;
}

function searchHandler(e) {
	//find results
	let results = search();
	//create dropdown
	let resultsList = document.getElementById("results-list");
	resultsList.innerHTML = '';
	 // loop through the results
	 if (results.length > 0) {
		let select = document.createElement("select");
		for (let i = 0; i < results.length; i++) {
		//create new option element
			let option = document.createElement("option");
			// set value and tedt
			option.value = results[i];
			option.textContent = results[i];
			select.appendChild(option);}
			//append element
			resultsList.appendChild(select);
		}
}

document.querySelector("input[name='query']").addEventListener("input", searchHandler);



function showSuggestions(results, inputVal) {
let resultsList = document.getElementById("results-list");
resultsList.innerHTML = " ";
if (results.length > 0 && inputVal !== " "){
	let select = document.createElement("select");
	for (let i = 0; i < results.length; i++) {
		let option = document.createElement("option");
		option.value = results[i];
		option.textContent = results[i];
		option.addEventListener("mouseover", highlightSuggestion);
		select.appendChild(option);
	}
	resultsList.appendChild(select);
}
}

function useSuggestion(e) {
	let searchBar = document.getElementsById("search-bar");
	searchBar.value = e;

}



input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);