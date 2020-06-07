package com.skilldistillery.events.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Watergarden {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;

	private String sector;
	
	private String veggie;
	
	@Column(name="watering_frequency")
	private String wateringFrequency;
	
	@Column(name="last_watered")
	private LocalDate lastWatered;
	
	@Column(name="next_watered")
	private LocalDate nextWatered;
	
	@Column(name="duration_of_watering")
	private Integer durationOfWatering;

	private String notes;
	
	public Watergarden() {
		super();
	}

	public Watergarden(int id, String name, String sector, String veggie, String wateringFrequency,
			LocalDate lastWatered, LocalDate nextWatered, Integer durationOfWatering, String notes) {
		super();
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}

	public String getVeggie() {
		return veggie;
	}

	public void setVeggie(String veggie) {
		this.veggie = veggie;
	}

	public String getWateringFrequency() {
		return wateringFrequency;
	}

	public void setWateringFrequency(String wateringFrequency) {
		this.wateringFrequency = wateringFrequency;
	}

	public LocalDate getLastWatered() {
		return lastWatered;
	}

	public void setLastWatered(LocalDate lastWatered) {
		this.lastWatered = lastWatered;
	}

	public LocalDate getNextWatered() {
		return nextWatered;
	}

	public void setNextWatered(LocalDate nextWatered) {
		this.nextWatered = nextWatered;
	}

	public Integer getDurationOfWatering() {
		return durationOfWatering;
	}

	public void setDurationOfWatering(Integer durationOfWatering) {
		this.durationOfWatering = durationOfWatering;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Watergarden [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", sector=");
		builder.append(sector);
		builder.append(", veggie=");
		builder.append(veggie);
		builder.append(", wateringFrequency=");
		builder.append(wateringFrequency);
		builder.append(", lastWatered=");
		builder.append(lastWatered);
		builder.append(", nextWatered=");
		builder.append(nextWatered);
		builder.append(", durationOfWatering=");
		builder.append(durationOfWatering);
		builder.append(", notes=");
		builder.append(notes);
		builder.append("]");
		return builder.toString();
	}

	
	
	
	
}
