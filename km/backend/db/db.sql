DROP DATABASE IF EXISTS KMBar;
CREATE DATABASE KMBar DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
CREATE USER IF NOT EXISTS 'KMBar'@'localhost' IDENTIFIED BY 'Thaysontiti121208*';
GRANT ALL ON KMBar.* TO 'KMBar'@'localhost';

use KMBar;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT auto_increment,
  usuario varchar(30) NOT NULL UNIQUE,
  passwd varchar(255) NOT NULL,
  email varchar(40) NOT NULL UNIQUE,
  PRIMARY KEY(id)
) ENGINE=InnoDB;

c
CREATE TABLE IF NOT EXISTS comida (
  id INT auto_increment,
  nombre varchar(255) NOT NULL,
  categoria varchar(120) NOT NULL,
  precio DOUBLE NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS comanda (
  id INT auto_increment,
  fecha DATE NOT NULL,
  total DOUBLE NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS comanda_detalle (
  id INT auto_increment,
  comanda_id INT,
  comida_id INT,
  bebida_id INT,
  cantidad INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (comanda_id) REFERENCES comanda(id),
  FOREIGN KEY (bebida_id) REFERENCES bebidas(id)
);

CREATE TABLE IF NOT EXISTS mesas (
  id INT,
  comanda_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (comanda_id) REFERENCES comanda(id)
) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS ingresos (
  id INT auto_increment,
  fecha DATE NOT NULL,
  ingreso DOUBLE NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB;

INSERT INTO bebidas (nombre, categoria, precio) VALUES
('Café solo', 'Café', 1.00),
('Cortado Natural', 'Café', 1.10),
('Cortado Leche y Leche', 'Café', 1.20),
('Café con leche', 'Café', 1.30),
('Bombón', 'Café', 1.10),
('Caña', 'Cervezas', 1.00),
('Cerveza Victoria', 'Cervezas', 1.20),
('Cerveza FreeDam Limón', 'Cervezas', 1.30),
('Cerveza Turia', 'Cervezas', 1.40),
('Cerveza Keller', 'Cervezas', 1.40),
('Cerveza Victoria 0,0%', 'Cervezas', 1.30),
('Cerveza 1906', 'Cervezas', 2.00),
('Agua 50 cl', 'Bebidas sin alcohol', 0.50),
('Agua grande 1,5 L', 'Bebidas sin alcohol', 1.00),
('Agua con gas 50 cl', 'Bebidas sin alcohol', 1.20),
('Zumo', 'Bebidas sin alcohol', 1.20),
('Refrescos coca-cola', 'Bebidas sin alcohol', 1.20),
('Refrescos zero', 'Bebidas sin alcohol', 1.20),
('Refrescos fanta', 'Bebidas sin alcohol', 1.10),
('Refrescos seven up', 'Bebidas sin alcohol', 1.10),
('Refrescos clipper', 'Bebidas sin alcohol', 1.10),
('Aquarius', 'Bebidas sin alcohol', 1.40),
('Nestea', 'Bebidas sin alcohol', 1.40),
('Appletiser', 'Bebidas sin alcohol', 1.30),
('Power King', 'Bebidas sin alcohol', 1.20),
('Tónica', 'Bebidas sin alcohol', 1.20),
('Tónica fresa', 'Bebidas sin alcohol', 1.40),
('Viña Zanata (Blanco)', 'Vinos', 2.00),
('Viña Zanata (Tinto)', 'Vinos', 2.00),
('Protos (tinto)', 'Vinos', 2.50),
('Puerto de Indias', 'Bebidas alcohólicas', 4.50),
('Beefeater', 'Bebidas alcohólicas', 3.50),
('Arehucas oro', 'Bebidas alcohólicas', 3.50),
('Arehucas blanco', 'Bebidas alcohólicas', 3.50),
('Matusalén', 'Bebidas alcohólicas', 5.00),
('Johnnie Walker', 'Bebidas alcohólicas', 3.50),
('Vodka', 'Bebidas alcohólicas', 3.50);

INSERT INTO comida (nombre, categoria, precio) VALUES
('Papas bravas', 'Para picar', 3.50),
('Papas locas (jamón, queso y salsas)', 'Para picar', 4.00),
('Papas locas KM (jamón, queso, salchicha, pollo, mechada y salsas)', 'Para picar', 5.50),
('Nachos (pico de gallo, guacamole, salsa de queso y salsa mexicana)', 'Para picar', 4.00),
('Crispy chicken KM (salsa barbacoa)', 'Para picar', 4.50),
('Salchichas de medio metro (con papas y salsas)', 'Para picar', 7.50),
('Bolitas de queso (6 unidades)', 'Para picar', 3.50),
('Croquetas (6 unidades)', 'Para picar', 3.50),
('Mechada (con queso y alioli)', 'Bocadillos', 2.50),
('Tortilla (con queso y alioli)', 'Bocadillos', 3.00),
('Pollo (queso)', 'Bocadillos', 2.50),
('Pollo especial (con queso, tomate, cebolla, huevo y bacon)', 'Bocadillos', 3.00),
('Pollo KM (crispy chicken, queso, salsa especial KM)', 'Bocadillos', 3.00),
('Americana (120 gr de carne, queso cheddar, bacon, huevo, cebolla frita, tomate y salsa)', 'Hamburguesas', 3.50),
('Mexicana (crispy chicken, pico de gallo, guacamole y queso cheddar)', 'Hamburguesas', 5.50),
('Canaria (120 gr de carne, queso canario, chorizo de teror, papas, huevo y mojo rojo)', 'Hamburguesas', 5.50),
('KM (120 gr de carne, queso de cabra, cebolla caramelizada, rúcula y mostaza dulce)', 'Hamburguesas', 6.50);



-- Insertar una nueva comanda
INSERT INTO comanda (id,fecha, total) VALUES (1,'2023-05-02', 150.5);

-- Insertar detalles de la comanda
INSERT INTO comanda_detalle (comanda_id, comida_id, cantidad) VALUES (1, 1, 2);
INSERT INTO comanda_detalle (comanda_id, comida_id, cantidad) VALUES (1, 2, 1);

INSERT INTO mesas (id,comanda_id) VALUES 
(1,1),
(2,NULL),
(3,NULL),
(4,NULL),
(5,NULL),
(6,NULL),
(7,NULL),
(8,NULL),
(9,NULL),
(10,NULL),
(11,NULL),
(12,NULL);

