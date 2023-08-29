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

CREATE TABLE IF NOT EXISTS comanda (
  id INT auto_increment,
  fecha DATE NOT NULL,
  total DOUBLE NOT NULL,
  tipo_pago varchar(150) NOT NULL,
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
  FOREIGN KEY (comida_id) REFERENCES comida(id),
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
  fecha DATE NOT NULL UNIQUE,
  ingreso DOUBLE NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO bebidas (nombre, categoria, precio) VALUES
('Café solo', 'Café', 1.00),
('Barraquito', 'Café', 1.30),
('Cortado Natural', 'Café', 1.20),
('Cortado Leche y Leche', 'Café', 1.20),
('Café con leche', 'Café', 1.40),
('Bombón', 'Café', 1.10),
('Zaperoco', 'Café', 1.40),
('Colacao', 'Café', 1.40),
('Flor de Manzanilla', 'Té', 1.30),
('Té Negro Inglés', 'Té', 1.30),
('Té Rojo Pu-Erh', 'Té', 1.30),
('Té Verde Hierba-Buena', 'Té', 1.30),
('Té Negro Chai', 'Té', 1.30),
('Té Rojo Pu-erh con frutas', 'Té', 1.30),
('Té Frutas del Bosque', 'Té', 1.30),
('Té Verde con Flores', 'Té', 1.30),
('Té Blanco Mandarina-canela', 'Té', 1.30),
('Menta Poleo', 'Té', 1.30),
('Tila', 'Té', 1.30),
('Rooibos con flores', 'Té', 1.30),
('Rooibos Tropical', 'Té', 1.30),
('Puerto de Indias', 'Bebidas alcohólicas', 5.00),
('Beefeater', 'Bebidas alcohólicas', 4.00),
('Arehucas oro', 'Bebidas alcohólicas', 4.00),
('Arehucas blanco', 'Bebidas alcohólicas', 4.00),
('Matusalén 7 años', 'Bebidas alcohólicas', 5.00),
('Matusalén 15 años', 'Bebidas alcohólicas', 6.00),
('Johnnie Walker', 'Bebidas alcohólicas', 4.00),
('Vodka', 'Bebidas alcohólicas', 4.00),
('Tanqueray', 'Bebidas alcohólicas', 5.00),
('Tanqueray Lime', 'Bebidas alcohólicas', 5.50),
('Caña Victoria', 'Cervezas', 1.00),
('Caña Victoria Limón', 'Cervezas', 1.00),
('Caña Woll-Damm', 'Cervezas', 1.80),
('Cerveza Victoria', 'Cervezas', 1.20),
('Cerveza Victoria Marengo', 'Cervezas', 2.00),
('Cerveza FreeDam Limón', 'Cervezas', 1.40),
('Cerveza Turia', 'Cervezas', 1.40),
('Cerveza Keller', 'Cervezas', 1.40),
('Cerveza Victoria 0,0%', 'Cervezas', 1.30),
('Cerveza Tostada 0,0%', 'Cervezas', 1.40),
('Cerveza 1906', 'Cervezas', 2.00),
('Cerveza Alhambra', 'Cervezas', 2.50),
('Kopparberg', 'Cervezas', 2.50),
('Estrella Galicia', 'Cervezas', 1.10),
('Agua 50 cl', 'Refrescos', 0.70),
('Agua grande 1,5 L', 'Refrescos', 1.50),
('Agua con gas 50 cl', 'Refrescos', 1.20),
('Zumo', 'Refrescos', 1.40),
('Refrescos coca-cola', 'Refrescos', 1.50),
('Refrescos zero', 'Refrescos', 1.50),
('Refrescos fanta', 'Refrescos', 1.50),
('Refrescos seven up', 'Refrescos', 1.50),
('Refrescos clipper', 'Refrescos', 1.50),
('Aquarius', 'Refrescos', 1.80),
('Nestea', 'Refrescos', 1.80),
('Appletiser', 'Refrescos', 1.80),
('Power King', 'Refrescos', 1.80),
('Tónica', 'Refrescos', 1.50),
('Tónica fresa', 'Refrescos', 1.50),
('Viña Zanata (Blanco)', 'Vinos', 2.00),
('Viña Zanata (Tinto)', 'Vinos', 2.00),
('Protos (tinto)', 'Vinos', 2.50),
('Viña Zanata (Tinto)', 'Vinos', 2.00),
('Protos (tinto)', 'Vinos', 2.50);

INSERT INTO comida (nombre, categoria, precio) VALUES
('Papas locas (jamón, queso y salsas)', 'Para picar', 4.50),
('Papas locas KM (jamón, queso, salchicha, pollo, mechada y salsas)', 'Para picar', 5.50),
('Crispy chicken KM (salsa mil y mostaza)', 'Para picar', 4.50),
('Jamoncitos de pollo frito', 'Para picar', 4.50),
('Salchichas de medio metro (con papas y salsas)', 'Para picar', 7.50),
('Tabla de Quesos Canarios y Jamón Serrano', 'Para picar', 5.50),
('Croquetas (6 unidades)', 'Para picar', 4.50),
('Tequeños (6 unidades)', 'Para picar', 5.00),
('Mechada (con queso y alioli)', 'Bocadillos', 3.00),
('Tortilla (con queso y alioli)', 'Bocadillos', 3.00),
('Pollo (queso)', 'Bocadillos', 2.80),
('Pollo (queso,ensalada)', 'Bocadillos', 3.20),
('Pollo (queso,ensalada,huevo)', 'Bocadillos', 3.50),
('Pollo KM (crispy chicken, queso, salsa especial KM)', 'Bocadillos', 3.00),
('Realejo Bajo (queso, jamón, pollo, tortilla y alioli)', 'Bocadillos', 3.50),
('Hamburguesa Full KM', 'Hamburguesa', 5.00),
('Chocolatinas', 'Chucheria', 1.00),
('Kinder Bueno', 'Chucheria', 1.50),
('Tirma', 'Chucheria', 0.50),
('Regaliz', 'Chucheria', 0.50),
('Paquete de Golosinas', 'Chucheria', 1.30),
('Fresquitos', 'Chucheria', 0.70),
('Chupete Koyak', 'Chucheria', 0.50),
('Paquete de Papas', 'Chucheria', 0.80),
('Paquete de Pipas', 'Chucheria', 1.00),
('Paquete Palomitas', 'Chucheria', 1.00),
('Mentitas', 'Chucheria', 0.15),
('Paquete Frutos Secos', 'Chucheria', 1.30),
('Donut', 'Chucheria', 1.20),
('Donut Chocolate', 'Chucheria', 1.40),
('Palmeras & Cuñas', 'Chucheria', 1.50),
('Extra', 'Extra', 0.30),
('Arepas', 'Especial', 2.50),
('Caña & Tapa', 'Especial', 2.00); 



INSERT INTO mesas (id,comanda_id) VALUES 
(1,NULL),
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

