package com.skilldistillery.events.services;

import java.util.List;

import com.skilldistillery.events.entities.Watergarden;

public interface WaterGardenService {

	
	//C
	public Watergarden create(Watergarden wg);
	
	//R
	public List<Watergarden> findAll();
	
	public Watergarden findById(int id);
	
//	public Watergarden findByName(String name);
	
	
	//U
	public Watergarden update(int id, Watergarden wg);
	
	
	
	//D
	public Boolean delete(int id);
}
