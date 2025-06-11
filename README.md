# kmBar

![GitHub repo size](https://img.shields.io/github/repo-size/vmcabreu/kmBar)
![GitHub last commit](https://img.shields.io/github/last-commit/vmcabreu/kmBar)
![GitHub issues](https://img.shields.io/github/issues/vmcabreu/kmBar)
![GitHub license](https://img.shields.io/github/license/vmcabreu/kmBar)
![Angular version](https://img.shields.io/badge/Angular-15.1.0-red)

<details>
<summary><strong>🇪🇸 Español</strong></summary>

## Descripción

kmBar es una aplicación para la gestión de comandas en bares. Permite controlar ingresos diarios, administrar productos y comandas, y realizar seguimiento en tiempo real, utilizando un backend en PHP con JWT para autenticación, una base de datos MySQL, y un frontend desarrollado en Angular.

## Características principales

- Autenticación segura basada en JSON Web Tokens (JWT)  
- Backend en PHP para la lógica de negocio y manejo de datos  
- Base de datos MySQL para almacenamiento persistente  
- Frontend desarrollado con Angular 15  
- Integración con Capacitor para empaquetado móvil (Android e iOS)  
- Interfaz moderna y responsiva  
- Gestión de comandas, productos y control de ingresos  

## Tecnologías

- **Backend:** PHP, JWT, MySQL  
- **Frontend:** Angular 15, RxJS, SweetAlert2  
- **Mobile:** Capacitor (Android e iOS)  
- **Herramientas:** Angular CLI, Karma, Jasmine  

## Requisitos

- PHP 7.4 o superior con extensiones para JWT y MySQL  
- MySQL 5.7 o superior  
- Node.js 16+ y npm o pnpm  
- Angular CLI 15+  
- Android Studio / Xcode para móviles  

## Instalación

### Backend

1. Clonar el repositorio y acceder a la carpeta backend.  
2. Configurar base de datos MySQL con scripts SQL.  
3. Configurar parámetros en PHP (host, usuario, contraseña, base de datos).  
4. Definir clave secreta para JWT.  
5. Levantar servidor PHP (ejemplo: `php -S localhost:8000`).  

### Frontend

1. Entrar a la carpeta `frontend`.  
2. Instalar dependencias con `npm install` o `pnpm install`.  
3. Levantar servidor con `npm start`.  
4. Construir producción con `npm run build`.  
5. Para móvil, usar Capacitor (`npx cap sync`, `npx cap open android/ios`).  

## Scripts frontend

| Script  | Descripción                      |
|---------|--------------------------------|
| `ng`    | Comando Angular CLI             |
| `start` | Levanta servidor de desarrollo  |
| `build` | Construye para producción        |
| `watch` | Construye en modo watch          |
| `test`  | Ejecuta tests con Karma/Jasmine |

## Uso

- Acceder a la app web o móvil  
- Login con usuario y contraseña  
- Gestionar comandas y productos  
- Visualizar ingresos y reportes  

## Estructura del proyecto

/backend - Código PHP y configuración backend
/frontend - Aplicación Angular + Capacitor


## Dependencias principales frontend

- Angular 15  
- RxJS 7.8  
- SweetAlert2  
- Capacitor  
- Formidable (backend)  

## Contribuciones

Bienvenidas. Abrir issues o pull requests para bugs o mejoras.

## Licencia

MIT

## Contacto

Autor: vmcabreu  
Repo: https://github.com/vmcabreu/kmBar

</details>

<details>
<summary><strong>🇬🇧 English</strong></summary>

## Description

kmBar is an application for managing bar orders. It allows daily income control, product and order management, and real-time tracking using a PHP backend with JWT authentication, MySQL database, and Angular frontend.

## Main Features

- Secure authentication using JSON Web Tokens (JWT)  
- PHP backend for business logic and data management  
- MySQL database for persistent storage  
- Frontend developed with Angular 15  
- Integration with Capacitor for mobile packaging (Android and iOS)  
- Modern and responsive UI  
- Orders, products, and income management  

## Technologies

- **Backend:** PHP, JWT, MySQL  
- **Frontend:** Angular 15, RxJS, SweetAlert2  
- **Mobile:** Capacitor (Android and iOS)  
- **Tools:** Angular CLI, Karma, Jasmine  

## Requirements

- PHP 7.4+ with JWT and MySQL extensions  
- MySQL 5.7+  
- Node.js 16+ and npm or pnpm  
- Angular CLI 15+  
- Android Studio / Xcode for mobile builds  

## Installation

### Backend

1. Clone the repository and go to the backend folder.  
2. Configure the MySQL database with SQL scripts.  
3. Set the PHP connection parameters (host, user, password, database).  
4. Define the JWT secret key.  
5. Start the PHP server (e.g., `php -S localhost:8000`).  

### Frontend

1. Navigate to the `frontend` folder.  
2. Install dependencies with `npm install` or `pnpm install`.  
3. Start the development server with `npm start`.  
4. Build for production with `npm run build`.  
5. For mobile, use Capacitor (`npx cap sync`, `npx cap open android/ios`).  

## Frontend scripts

| Script  | Description                    |
|---------|-------------------------------|
| `ng`    | Angular CLI command            |
| `start` | Run development server         |
| `build` | Build production version       |
| `watch` | Build in watch mode            |
| `test`  | Run tests with Karma/Jasmine  |

## Usage

- Access the app via web or mobile  
- Login with username and password  
- Manage orders and products  
- View income and reports  

## Project structure

/backend - PHP backend code and config
/frontend - Angular + Capacitor app


## Main frontend dependencies

- Angular 15  
- RxJS 7.8  
- SweetAlert2  
- Capacitor  
- Formidable (backend)  

## Contributions

Welcome! Open issues or pull requests for bugs or improvements.

## License

MIT

## Contact

Author: vmcabreu  
Repo: https://github.com/vmcabreu/kmBar

</details>
