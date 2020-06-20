import { Component, OnInit } from '@angular/core';
import { GardenService } from '../services/garden.service';
import { Watering } from '../models/watering';

@Component({
  selector: 'app-watering-list',
  templateUrl: './watering-list.component.html',
  styleUrls: ['./watering-list.component.css']
})
export class WateringListComponent implements OnInit {
  waterings = [];
  selected = null;
  newWatering = new Watering();
  //selectedType: String = 'all';    what the fuck was this for???



  constructor(private gardenService: GardenService) { }

  ngOnInit(): void {
    this.loadWatering();
  }

  selectWatering(watering) {
    this.selected = watering;
  }

  showTable() {
    this.selected = null;
  }

  loadWatering(){
    this.gardenService.index().subscribe(
      data => {
       this.waterings = data;
      },
      err => {
       console.error('oh no! loadPokemon() method failed in component with error: ' + err);
      }
    );
  }

  create() {
    this.gardenService.create(this.newWatering).subscribe(
      data => {
        console.log('creation success!');
        this.loadWatering();
      },
      err => {
        console.error('problem with creation in the component level');
      }
    );
  }
}
