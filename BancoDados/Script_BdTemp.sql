





-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dbtemp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbtemp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbtemp` DEFAULT CHARACTER SET utf8mb4 ;
USE `dbtemp` ;

-- -----------------------------------------------------
-- Table `dbtemp`.`clima`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbtemp`.`clima` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cidade` VARCHAR(45) NULL DEFAULT NULL,
  `datahora` DATETIME NULL DEFAULT NULL,
  `temperatura` DECIMAL(2,0) NULL DEFAULT NULL,
  `condicao` VARCHAR(45) NULL DEFAULT NULL,
  `umidade` DECIMAL(1,0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
