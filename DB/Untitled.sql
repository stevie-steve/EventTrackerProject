-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventtrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventtrackerdb` ;

-- -----------------------------------------------------
-- Schema eventtrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventtrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `eventtrackerdb` ;

-- -----------------------------------------------------
-- Table `watergarden`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `watergarden` ;

CREATE TABLE IF NOT EXISTS `watergarden` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `sector` VARCHAR(100) NOT NULL,
  `veggie` VARCHAR(45) NOT NULL,
  `watering_frequency` VARCHAR(100) NOT NULL,
  `last_watered` DATETIME NOT NULL,
  `next_watered` DATETIME NOT NULL,
  `duration_of_watering` INT NOT NULL,
  `notes` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS gardendb@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'gardendb'@'localhost' IDENTIFIED BY 'gardendb';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'gardendb'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `watergarden`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventtrackerdb`;
INSERT INTO `watergarden` (`id`, `name`, `sector`, `veggie`, `watering_frequency`, `last_watered`, `next_watered`, `duration_of_watering`, `notes`) VALUES (1, 'Love Garden', 'Row 1', 'Bush Beans', 'Daily', '2020-06-06', '2020-06-07', 30, 'Bush Beans require mostly sun and will not do well under 65 degrees F.');
INSERT INTO `watergarden` (`id`, `name`, `sector`, `veggie`, `watering_frequency`, `last_watered`, `next_watered`, `duration_of_watering`, `notes`) VALUES (2, 'Love Garden', 'Row 2', 'Spinach', 'Daily', '2020-06-06', '2020-06-07', 30, 'Spinach can go multiple das without wateri g but it is recommended to keep the soil moist');
INSERT INTO `watergarden` (`id`, `name`, `sector`, `veggie`, `watering_frequency`, `last_watered`, `next_watered`, `duration_of_watering`, `notes`) VALUES (3, 'Love Garden', 'Row 3', 'Beets', 'Daily', '2020-06-06', '2020-06-07', 10, 'Beets should be watered daily until harvesting. Stop watering 3 days before harvesting.');
INSERT INTO `watergarden` (`id`, `name`, `sector`, `veggie`, `watering_frequency`, `last_watered`, `next_watered`, `duration_of_watering`, `notes`) VALUES (4, 'Love Garden', 'Row 4', 'Cucumbers', 'Every Other Day', '2020-06-06', '2020-06-08', 30, 'Cucumbers cannot be overwstered, or the fruit will rot while on the vine. ');
INSERT INTO `watergarden` (`id`, `name`, `sector`, `veggie`, `watering_frequency`, `last_watered`, `next_watered`, `duration_of_watering`, `notes`) VALUES (5, 'Love Garden', 'Open Area', 'Pumpkin', 'Every Other Day', '2020-06-06', '2020-06-08', 20, 'Pumpkins require full sun and moist soil.  Pumpkins will show their emotions by the jack-o-lantern face.');

COMMIT;

