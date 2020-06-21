import { Component, OnInit } from '@angular/core';
import { GardenService } from 'src/app/services/garden.service';
import { Watering } from 'src/app/models/watering';


@Component({
  selector: 'app-watering-list',
  templateUrl: './watering-list.component.html',
  styleUrls: ['./watering-list.component.css']
})
export class WateringListComponent implements OnInit {
  waterings = [];
  selected = null;
  newWatering: Watering = new Watering();
  editWatering = null;

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

    reload() {
      this.gardenService.index().subscribe(
        waterings => {
          this.waterings = waterings;
        },
        fail => {
          console.error('WateringListComponent.index(): error retrieving waterings');
          console.error(fail);
        }
      );
    }

  loadWatering(){
    this.gardenService.index().subscribe(
      data => {
       this.waterings = data;
      },
      err => {
       console.error('loadWatering() method failed in component with error: ' + err);
      }
    );
  }

  create() {
    console.log(this.newWatering);
    this.gardenService.create(this.newWatering).subscribe(
      data => {
        console.log('creation success!');

        this.newWatering = new Watering();

        this.loadWatering();
      },
      err => {
        console.error('problem with creation in the component level');
      }
    );
  }

edit (watering: Watering){
  this.editWatering = watering;
}

  update(watering: Watering) {
    this.gardenService.update(watering).subscribe(
      lostWatering => {
        this.reload();
        this.editWatering = null;
      },
      err => {
        console.error('Problem Updating');
      }
    );
  }

  destroy(id: number) {
    this.gardenService.destroy(id).subscribe(
      lostWatering => {
        this.reload();
      },
      err => {
        console.error('problem deleting');
      }
    );
  }

}
