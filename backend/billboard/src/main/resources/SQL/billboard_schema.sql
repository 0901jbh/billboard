-- MySQL Script generated by MySQL Workbench
-- Mon Apr  3 12:26:36 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema billboard
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema billboard
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `billboard` DEFAULT CHARACTER SET utf8mb4 ;
USE `billboard` ;

-- -----------------------------------------------------
-- Table `billboard`.`baseaddress`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`baseaddress` (
  `dongCode` VARCHAR(10) NOT NULL,
  `dongName` VARCHAR(30) NOT NULL,
  `gugunName` VARCHAR(30) NOT NULL,
  `lat` VARCHAR(20) NOT NULL,
  `lng` VARCHAR(20) NOT NULL,
  `sidoName` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`dongCode`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`boardgameInfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`boardgameInfo` (
  `gameId` INT(11) NOT NULL,
  `thumbnail` VARCHAR(300) NOT NULL,
  `image` VARCHAR(300) NOT NULL,
  `description` VARCHAR(6000) NOT NULL,
  `yearpublished` INT(11) NOT NULL,
  `minplayers` INT(11) NOT NULL,
  `maxplayers` INT(11) NOT NULL,
  `minplaytime` INT(11) NULL DEFAULT NULL,
  `maxplaytime` INT(11) NULL DEFAULT NULL,
  `minage` INT(11) NULL DEFAULT NULL,
  `usersrated` INT(11) NULL DEFAULT NULL,
  `average` DOUBLE NULL DEFAULT NULL,
  `boardgamerank` INT(11) NULL DEFAULT NULL,
  `numweights` INT(11) NULL DEFAULT NULL,
  `averageweight` DOUBLE NULL DEFAULT NULL,
  `strategygamerank` VARCHAR(10) NULL DEFAULT NULL,
  `familygamerank` VARCHAR(10) NULL DEFAULT NULL,
  `partygamerank` VARCHAR(10) NULL DEFAULT NULL,
  `abstractgamerank` VARCHAR(10) NULL DEFAULT NULL,
  `thematicrank` VARCHAR(10) NULL DEFAULT NULL,
  `wargamerank` VARCHAR(10) NULL DEFAULT NULL,
  `customizablerank` VARCHAR(10) NULL DEFAULT NULL,
  `childrengamerank` VARCHAR(10) NULL DEFAULT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`gameId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `billboard`.`dongcode`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`dongcode` (
  `dongCode` VARCHAR(10) NOT NULL,
  `dongName` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`dongCode`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`user` (
  `userId` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `experience` INT(11) NULL DEFAULT NULL,
  `matchCount` INT(11) NULL DEFAULT '0',
  `nickname` VARCHAR(20) NULL DEFAULT NULL,
  `password` VARCHAR(64) NULL DEFAULT NULL,
  `refreshToken` VARCHAR(200) NULL DEFAULT NULL,
  `state` VARCHAR(10) NULL DEFAULT 'offline',
  `winCount` INT(11) NULL DEFAULT '0',
  `createdTime` DATETIME NULL DEFAULT NULL,
  `updatedTime` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE INDEX `UK_ob8kqyqqgmefl0aco34akdtpe` (`email` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`room`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`room` (
  `roomId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `createdTime` DATETIME NULL DEFAULT NULL,
  `updatedTime` DATETIME NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `lat` VARCHAR(20) NULL DEFAULT NULL,
  `lng` VARCHAR(20) NULL DEFAULT NULL,
  `location` VARCHAR(45) NULL DEFAULT NULL,
  `personLimit` INT(11) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `hostId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`roomId`),
  INDEX `FK3d8drd43ida8w00lot815g1kd` (`hostId` ASC),
  CONSTRAINT `FK3d8drd43ida8w00lot815g1kd`
    FOREIGN KEY (`hostId`)
    REFERENCES `billboard`.`user` (`userId`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`entry`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`entry` (
  `entryId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `roomId` BIGINT(20) NOT NULL,
  `userId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`entryId`),
  INDEX `FKs79qcea6gclgyph7ksy4wv2ym` (`roomId` ASC),
  INDEX `FKo1ht81n8maixip72c7qp22r7i` (`userId` ASC),
  CONSTRAINT `FKo1ht81n8maixip72c7qp22r7i`
    FOREIGN KEY (`userId`)
    REFERENCES `billboard`.`user` (`userId`)
    ON DELETE CASCADE,
  CONSTRAINT `FKs79qcea6gclgyph7ksy4wv2ym`
    FOREIGN KEY (`roomId`)
    REFERENCES `billboard`.`room` (`roomId`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`favorite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`favorite` (
  `gameId` INT(11) NOT NULL,
  `userId` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`gameId`, `userId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`follow`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`follow` (
  `followId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `fromUserId` VARCHAR(45) NOT NULL,
  `toUserId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`followId`),
  INDEX `FKbijf6d045jwu848b19i22vxcq` (`fromUserId` ASC),
  INDEX `FKy1g23in1pbbkgic6lcsiwda2` (`toUserId` ASC),
  CONSTRAINT `FKbijf6d045jwu848b19i22vxcq`
    FOREIGN KEY (`fromUserId`)
    REFERENCES `billboard`.`user` (`userId`),
  CONSTRAINT `FKy1g23in1pbbkgic6lcsiwda2`
    FOREIGN KEY (`toUserId`)
    REFERENCES `billboard`.`user` (`userId`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`guguncode`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`guguncode` (
  `gugunCode` VARCHAR(10) NOT NULL,
  `gugunName` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`gugunCode`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`history` (
  `gameId` INT(11) NOT NULL,
  `userId` VARCHAR(45) NOT NULL,
  `createdTime` DATETIME NULL DEFAULT NULL,
  `updatedTime` DATETIME NULL DEFAULT NULL,
  `count` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`gameId`, `userId`),
  INDEX `Fk_history_user_userId` (`userId` ASC),
  CONSTRAINT `FK3olcu07uasyg0vqu4mj7rwhto`
    FOREIGN KEY (`gameId`)
    REFERENCES `billboard`.`boardgameInfo` (`gameId`),
  CONSTRAINT `Fk_history_user_userId`
    FOREIGN KEY (`userId`)
    REFERENCES `billboard`.`user` (`userId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`mailauth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`mailauth` (
  `email` VARCHAR(45) NOT NULL,
  `authKey` VARCHAR(10) NULL DEFAULT NULL,
  `createdTime` DATETIME NULL DEFAULT NULL,
  `updatedTime` DATETIME NULL DEFAULT NULL,
  `authorized` BIT(1) NULL DEFAULT b'0',
  PRIMARY KEY (`email`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`reply`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`reply` (
  `replyId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `createdTime` DATETIME NULL DEFAULT NULL,
  `updatedTime` DATETIME NULL DEFAULT NULL,
  `content` VARCHAR(60) NULL DEFAULT NULL,
  `roomId` BIGINT(20) NOT NULL,
  `userId` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`replyId`),
  INDEX `FKs2ot9kvgngmjldt22c6hw5oj` (`roomId` ASC),
  INDEX `FK7w0fa8tqaqiuvxg34vcf8p19k` (`userId` ASC),
  CONSTRAINT `FK7w0fa8tqaqiuvxg34vcf8p19k`
    FOREIGN KEY (`userId`)
    REFERENCES `billboard`.`user` (`userId`)
    ON DELETE CASCADE,
  CONSTRAINT `FKs2ot9kvgngmjldt22c6hw5oj`
    FOREIGN KEY (`roomId`)
    REFERENCES `billboard`.`room` (`roomId`)
    ON DELETE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`review` (
  `gameId` INT(11) NOT NULL,
  `userId` VARCHAR(255) NOT NULL,
  `comment` VARCHAR(5000) NULL DEFAULT NULL,
  `name` VARCHAR(255) NOT NULL,
  `rating` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`gameId`, `userId`),
  INDEX `idx_review_userId` (`userId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `billboard`.`sidocode`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `billboard`.`sidocode` (
  `sidoCode` VARCHAR(10) NOT NULL,
  `sidoName` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`sidoCode`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
