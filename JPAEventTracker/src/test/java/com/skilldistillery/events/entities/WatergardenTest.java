package com.skilldistillery.events.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class WatergardenTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Watergarden garden;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("GardenPU");

	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();

	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		garden = em.find(Watergarden.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		garden = null;

	}

	@Test
	@DisplayName("testing garden entity mapping")
	void test1() {
		assertNotNull(garden);
		assertEquals("Love Garden", garden.getName());
		assertEquals("Row 1", garden.getSector());
		assertEquals("Bush Beans", garden.getVeggie());
		assertEquals("Daily", garden.getWateringFrequency());
		assertEquals("2020-06-06", garden.getLastWatered().toString());
		assertEquals("2020-06-07", garden.getNextWatered().toString());
		assertEquals(30, garden.getDurationOfWatering());
		assertEquals("Bush Beans require mostly sun and will not do well under 65 degrees F.", garden.getNotes());
		
	}


}