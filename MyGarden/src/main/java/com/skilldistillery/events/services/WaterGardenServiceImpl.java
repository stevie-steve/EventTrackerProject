package com.skilldistillery.events.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.events.entities.Watergarden;
import com.skilldistillery.events.repositories.WaterGardenRepository;

@Service
public class WaterGardenServiceImpl implements WaterGardenService {

	@Autowired
	private WaterGardenRepository wgRepo;

	// c
	@Override
	public Watergarden create(Watergarden wg) {

		return wgRepo.save(wg);
	}

	// R
	@Override
	public List<Watergarden> findAll() {
		return wgRepo.findAll();
	}

	@Override
	public Watergarden findById(int id) {
		Optional<Watergarden> wgOpt = wgRepo.findById(id);
		if (wgOpt.isPresent()) {
			return wgOpt.get();
		} else {

			return null;
		}
	}

//	@Override
//	public Watergarden findByName(String name) {
//		if(wg.isPresent()) {
//			return wg.get();	
//		}
//		else {
//			
//			return null;
//		}
//	}

	// U

	@Override
	public Watergarden update(int id, Watergarden wg) {
		Optional<Watergarden> waterOpt = wgRepo.findById(id);
		Watergarden managedWG = null;
		if (waterOpt.isPresent()) {
			managedWG = waterOpt.get();
			managedWG.setName(wg.getName());
			managedWG.setSector(wg.getSector());
			managedWG.setVeggie(wg.getVeggie());
			managedWG.setWateringFrequency(wg.getWateringFrequency());
			managedWG.setLastWatered(wg.getLastWatered());
			managedWG.setNextWatered(wg.getNextWatered());
			managedWG.setDurationOfWatering(wg.getDurationOfWatering());
			managedWG.setNotes(wg.getNotes());
			wgRepo.saveAndFlush(managedWG);

		}
		return managedWG;
	}

	// D

	@Override
	public Boolean delete(int id) {
		
		try {
			wgRepo.deleteById(id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}
	
}
