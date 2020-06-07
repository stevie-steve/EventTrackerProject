package com.skilldistillery.events.controllers;

import java.beans.PropertyEditorSupport;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.events.entities.Watergarden;
import com.skilldistillery.events.services.WaterGardenService;

@RestController
@RequestMapping("api")
public class WaterGardenController {

	@Autowired
	private WaterGardenService wgSrv;

	// C
	@PostMapping("watering")
	public Watergarden create(
			@RequestBody Watergarden wg,
			HttpServletResponse response, HttpServletRequest request) {

		wg = wgSrv.create(wg);
		if (wg == null) {
			response.setStatus(404);
		} else {
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(wg.getId());
			response.setHeader("Location", url.toString());
		}
		return wg;
	}

	// R
	@GetMapping("watering")
	public List<Watergarden> index(Watergarden wg) {
		return wgSrv.findAll();
	}

	@GetMapping("watering/{id}")
	public Watergarden findById(@PathVariable int id, HttpServletRequest request, HttpServletResponse response) {
		Watergarden wg = wgSrv.findById(id);
		if (wg == null) {
			response.setStatus(404);
		}
		return wg;
	}

	// U
	@PutMapping("watering/{id}")
	public Watergarden update(
			@PathVariable Integer id,
			@RequestBody Watergarden wg,
			HttpServletRequest request,
			HttpServletResponse response) {
		try {
			wg = wgSrv.update(id, wg);
			if(wg ==null){
			response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			wg = null;
		}
		return wg;
	}
	

	// D
	@DeleteMapping("watering/{id}")
	public void deletePost(
			@PathVariable Integer id, 
			HttpServletResponse response) {
		try {
			if (wgSrv.delete(id)) {
				response.setStatus(204);
			} else {
				response.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
		}
	}
	
	
	
	
	
	
	@InitBinder
	public void initBinder(WebDataBinder webDataBinder) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat timeFormat = new SimpleDateFormat("HH:MM");
		dateFormat.setLenient(true);
		webDataBinder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
		webDataBinder.registerCustomEditor(LocalDate.class, new PropertyEditorSupport() {
			@Override
			public void setAsText(String text) throws IllegalArgumentException {
				setValue(LocalDate.parse(text, DateTimeFormatter.ofPattern("yyyy-MM-dd")));
			}
			@Override
			public String getAsText() throws IllegalArgumentException {
				return DateTimeFormatter.ofPattern("yyyy-MM-dd").format((LocalDate) getValue());
			}
		});
		webDataBinder.registerCustomEditor(LocalTime.class, new PropertyEditorSupport() {
			@Override
			public void setAsText(String text) throws IllegalArgumentException {
				setValue(LocalTime.parse(text, DateTimeFormatter.ofPattern("HH:MM")));
			}
			@Override
			public String getAsText() throws IllegalArgumentException {
				return DateTimeFormatter.ofPattern("HH:MM").format((LocalDate) getValue());
			}
		});
}
}
