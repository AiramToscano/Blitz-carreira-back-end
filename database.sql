DROP DATABASE IF EXISTS `list`;

CREATE DATABASE `list`;

CREATE TABLE `list`.`talks` (
  `id` INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL
);
