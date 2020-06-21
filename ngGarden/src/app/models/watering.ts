export class Watering {

  id: number;
  name: string;
  sector: string;
  veggie: string;
  wateringFrequency: string;
  lastWatered: string;
  nextWatered: string;
  durationOfWatering: number;
  notes: string;

  constructor(id?: number, name?: string, sector?: string, veggie?: string,
    wateringFrequency?: string, lastWatered?: string, nextWatered?: string, durationOfWatering?: number, notes?: string
){
    this.id = id;
    this.name = name;
    this.sector = sector;
    this.veggie = veggie;
    this.wateringFrequency = wateringFrequency;
    this.lastWatered = lastWatered;
    this.nextWatered = nextWatered;
    this.durationOfWatering = durationOfWatering;
    this.notes = notes;
  }
}
