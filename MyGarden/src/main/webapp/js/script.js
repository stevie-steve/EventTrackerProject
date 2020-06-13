
window.addEventListener('load', function(){
	console.log('Window is loaded');
	
	init();
});

function init(){
	console.log('script.js loaded, YEAAAAHHHH BABY');
	//TODO everything.
	//this function will call to get all waterings
	loadGardenList();
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
//xhr.send();







function printWaterings(water) {
	let dataDiv = document.getElementById('AllGardenWatering');
	dataDiv.textContent = '';

	console.log(water);

	let table = document.createElement('table');
	table.className = 'table table-striped';  // chamnge 
	
	let tableHead = document.createElement('thead');
	tableHead.className = 'thead-dark';   // chamnge 
	
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

	th8 = document.createElement('th');
	th8.textContent = 'Update';
	tr.appendChild(th8);

	th9 = document.createElement('th');
	th9.textContent = 'Delete';
	tr.appendChild(th9);


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

		td8 = document.createElement('td')	
			//BUTTON TO UPDATE WATERING FORM 
			let updateBtn = document.createElement('button');
			updateBtn.name = 'updateBtn';
			updateBtn.id = 'updateBtn';
			updateBtn.className = 'btn btn-secondary';
			updateBtn.textContent = 'UPDATE';
			td8.appendChild(updateBtn);
			updateBtn.addEventListener('click', function(){
				showWateringUpdateForm(element);
			});
		tr1.appendChild(td8);

		td9 = document.createElement('td')	
			//BUTTON TO UPDATE WATERING FORM 
			let deleteBtn = document.createElement('button');
			deleteBtn.name = 'deleteBtn';
			deleteBtn.id = 'deleteBtn';
			deleteBtn.className = 'btn btn-secondary';
			deleteBtn.textContent = 'DELETE';
			td9.appendChild(deleteBtn);
			deleteBtn.addEventListener('click', function(){
				deleteWatering(element.id);
			});
		tr1.appendChild(td9);

		tableBody.appendChild(tr1);

		
	});
	table.appendChild(tableBody);
	dataDiv.appendChild(table);
}
