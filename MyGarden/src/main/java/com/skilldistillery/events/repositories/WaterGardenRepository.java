package com.skilldistillery.events.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.events.entities.Watergarden;

public interface WaterGardenRepository extends JpaRepository<Watergarden, Integer> {

//	List<Watergarden> findByBame(String name);
}
