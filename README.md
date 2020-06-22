## Event Tracker Project
### Week 11-13 Project for Skill Distillery
## Overview
The Watergarden App is made for the involved gardener.  Each plant has its own specific requirements when it comes to how much water it needs. This app allows the user to specifically designate a schedule for proper watering of each vegetable in the garden, as well as the garden location, previous watering dates, upcoming watering dates, duration of watering and and specific notes about the veggie.

## API Endpoints
| Returns | Verb     | URI   | Description |
|---------|----------|-------|-------------|
| Watering |	POST | api/watering |	Creates a new watering |
| List | GET | api/watering | Retrieve list of waterings for all veggies |
| watering | GET | api/watering/{id} | Retrieve specific watering by id |
| List | GET | api/watering/{id} |	Gets watering by veggie name |
| Watering	| PUT | api/watering/{id} |	Update an existing watering |
| Boolean	| DELETE | api/waterings/{id}	| Removes a watering by id |

## Technologies Used
* MySQL, MySQL Workbench
* JPA/Hibernate
* Spring Boot
* Spring Data JPA
* Git/Github
* Postman
* Angular

## Objectives
* Created a JPA Project
* Created a Java entity class POJO that models the database table.
* Mapped POJO using JPA.
* Configured a Spring Boot app to publish a REST API.
* Used Spring REST annotations.
* Used Spring Data JPA to perform all CRUD operations.
* Practiced sending and receiving JSON.
* 

## Lessons Learned
