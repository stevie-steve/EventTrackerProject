
window.addEventListener('load', function(){
	console.log('Window is loaded');
	
	init();
});

function init(){
	console.log('script.js loaded, YEAAAAHHHH BABY');

	loadGardenList();

	document.search.lookFor.addEventListener('click', function(e){
		e.preventDefault();

		var wateringId = document.search.id.value;
			if (!isNaN(wateringId) && wateringId>0){
				getSingleWatering(wateringId);
			}
	})

	document.createForm.addWatering.addEventListener('click', function(event){
		event.preventDefault();
		createWatering();
	});

}


var  loadGardenList= function() {
let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/watering/');
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4){
			if (xhr.status === 200){
				let dataJSON = xhr.responseText;
				let data = JSON.parse(dataJSON);
				console.log("All the waterings in garden the garden are: " + data );
				printWaterings(data);	
			}
			else if (xhr.status === 404) {
				console.error('Invalid Watering Event ' + dataJSON);
			}
			else {
				console.error('error: ' + xhr.status)
			}
		
		}
		//xhr.send();
	}
	xhr.send();
}



function printWaterings(water) {
	let dataDiv = document.getElementById('AllGardenWatering');
	dataDiv.textContent = '';

	console.log(water);

	let table = document.createElement('table');
	
	let tableHead = document.createElement('thead');
	
	let tr = document.createElement('tr');
	
	let th = document.createElement('th')	
	th.textContent = 'Garden Name';
	tr.appendChild(th);

	th1 = document.createElement('th');
	th1.textContent = 'Garden Sector';
	tr.appendChild(th1);

	th2 = document.createElement('th');
	th2.textContent = 'Veggie Name';
	tr.appendChild(th2);

	th3 = document.createElement('th');
	th3.textContent = 'Watering Frequency';
	tr.appendChild(th3);

	th4 = document.createElement('th');
	th4.textContent = 'Last Watering Date';
	tr.appendChild(th4);

	th5 = document.createElement('th');
	th5.textContent = 'Next Watering Date';
	tr.appendChild(th5);

	th6 = document.createElement('th');
	th6.textContent = 'Duration of Watering';
	tr.appendChild(th6);

	th7 = document.createElement('th');
	th7.textContent = 'Notes';
	tr.appendChild(th7);


	tableHead.appendChild(tr);	
	table.appendChild(tableHead);

	let tableBody = document.createElement('tbody');

	water.forEach(element => {
		console.log(element);
		tr1 = document.createElement('tr');

		td = document.createElement('td')	
		td.textContent = element.name;
		tr1.appendChild(td);
		
		td1 = document.createElement('td')	
		td1.textContent = element.sector;
		tr1.appendChild(td1);
		
		td2 = document.createElement('td')	
		td2.textContent = element.veggie;
		tr1.appendChild(td2);
		
		td3 = document.createElement('td')	
		td3.textContent = element.wateringFrequency;
		tr1.appendChild(td3);
		
		td4 = document.createElement('td')	
		td4.textContent = element.lastWatered;
		tr1.appendChild(td4);
	
		td5 = document.createElement('td')	
		td5.textContent = element.nextWatered;
		tr1.appendChild(td5);

		td6 = document.createElement('td')	
		td6.textContent = element.durationOfWatering;
		tr1.appendChild(td6);

		td7 = document.createElement('td')	
		td7.textContent = element.notes;
		tr1.appendChild(td7);

		tableBody.appendChild(tr1);

	});
	table.appendChild(tableBody);
	dataDiv.appendChild(table);
}


// create 
function createWatering(){
	let newWaterDiv= document.createForm;
	let water = {};
	water.name = newWaterDiv.name.value;
	water.sector = newWaterDiv.sector.value;
	water.veggie = newWaterDiv.veggie.value;
	water.wateringFrequency = newWaterDiv.wateringFrequency.value;
	water.lastWatered = newWaterDiv.lastWatered.value;
	water.nextWatered = newWaterDiv.nextWatered.value;
	water.durationOfWatering = newWaterDiv.durationOfWatering.value;
	water.notes = newWaterDiv.notes.value;

	let waterJson = JSON.stringify(water); 
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/watering');
		xhr.setRequestHeader('Content-type', 'application/json')
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200 || xhr.status === 201){
					let createdWatering = JSON.parse(xhr.responseText);
					loadGardenList();
				}
				else{
					if(xhr.status === 400){
						displayError(`Invalid watering data, unable to create watering form ${waterJson}`);
					} else{
						displayError('Unknown error creating log.')
					}
				}
			}
	};
	xhr.send(waterJson);
	}

	function getSingleWatering(id) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/watering/' + id);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					let dataJSON = xhr.responseText; 
					let data = JSON.parse(dataJSON); 
					console.log(data);
					showWatering(data);
				}else {
					if (xhr.status === 404) {		
						let dataDiv = document.getElementById('wateringData');
						dataDiv.textContent = '';	
						displayError('Record not found');
					}
					else {
						displayError('Error retrieving watering ' + id);
					}
				} 
			};
		}
		xhr.send(null);
	}
	function showWatering(watering){ 
		//let ErrorDiv = document.getElementById('ErrorData');
		//	ErrorDiv.textContent = '';

		var dataDiv = document.getElementById('wateringData');
		dataDiv.textContent = '';
		
		let name = document.createElement("h1");
			name.textContent = 'Garden Name: ' + watering.name;
		 	dataDiv.appendChild(name);

		let sector = document.createElement('blockquote');
	 		sector.textContent = 'Garden Sector: ' + watering.sector;
			dataDiv.appendChild(sector);
			  
		let veggie = document.createElement('blockquote');
			veggie.textContent = 'Veggie Name: ' + watering.veggie;
			dataDiv.appendChild(veggie);

		let waterFrequency = document.createElement('blockquote');
			waterFrequency.textContent = 'Watering Frequency: ' + watering.waterFrequency;
			dataDiv.appendChild(waterFrequency);
			  
		let lastWatered = document.createElement('blockquote');
			lastWatered.textContent = 'Last Watered (date): ' + watering.lastWatered;
			dataDiv.appendChild(lastWatered);
			  
		let nextWatered = document.createElement('blockquote');
			nextWatered.textContent = 'Next watering (date): ' + watering.nextWatered;
			dataDiv.appendChild(nextWatered);
			  
		let duration = document.createElement('blockquote');
			duration.textContent = 'Watering Duration(minutes): ' + watering.duration;
			dataDiv.appendChild(duration);

		let notes = document.createElement('blockquote');
			notes.textContent = 'Notes: ' + watering.notes;
			dataDiv.appendChild(notes);	
			
			 	let updateBtn = document.createElement('button');
			 	updateBtn.name = 'updateBtn';
			 	updateBtn.id = 'updateBtn';
			 	updateBtn.textContent = 'UPDATE';
			 	dataDiv.appendChild(updateBtn);
			 	updateBtn.addEventListener('click', function(){
			 		showWateringUpdateForm(element);
			 	});

		 	let deleteBtn = document.createElement('button');
		 	deleteBtn.name = 'deleteBtn';
		 	deleteBtn.id = 'deleteBtn';
		 	deleteBtn.textContent = 'DELETE';
		 	dataDiv.appendChild(deleteBtn);
		 	deleteBtn.addEventListener('click', function(){
				 deleteWatering(element.id);
				});
				
	}