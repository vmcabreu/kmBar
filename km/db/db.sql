DROP DATABASE IF EXISTS KMBar;
CREATE DATABASE KMBar DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
CREATE USER IF NOT EXISTS 'KMBar'@'localhost' IDENTIFIED BY 'Thaysontiti121208*';
GRANT ALL ON KMBar.* TO 'KMBar'@'localhost';

use KMBar;

CREATE TABLE IF NOT EXISTS bebidas (
  id INT auto_increment,
  nombre varchar(255) NOT NULL,
  categoria varchar(120) NOT NULL,
  precio DOUBLE NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS comida (
  id INT auto_increment,
  nombre varchar(255) NOT NULL,
  categoria varchar(120) NOT NULL,
  precio DOUBLE NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS mesas (
  id INT auto_increment,
  comanda_id varchar(255) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY comanda_id REFERENCES comanda (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS comanda (
  id INT auto_increment,
  encargo varchar(255) NOT NULL,
  fecha DATE NOT NULL,
  total DOUBLE NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS ingresos (
  id INT auto_increment,
  fecha DATE NOT NULL,
  ingreso DOUBLE NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB;