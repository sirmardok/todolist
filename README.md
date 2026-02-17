# Technical Test for Full Stack Developer – LG CNS
Esta aplicación es un Listado de tareas solicitado como prueba técnica para el cargo de Fullstack Developer en LG-CNS

## Contenido del proyecto
La aplicación contiene los siguientes proyectos:
* todolist (Proyecto backend en MySql y Java)
* react-todolist (Proyecto frontend en React)

## Funcionalidad
Aplicación para gestión de tareas con las operaciones básicas de listar, crear, modificar y borrar tareas. Adicionalmente es posible actualizar el estado para marcar como completada o colocar en pendiente la tarea. Botón para cambiar el tema de claro a oscuro. 

## Herramientas y tecnologías utilizadas
* Backend:
    - Java 17 (v17.0.12)
    - MySql 8.0.45
    - Springboot 4.0.2
    - Maven 3.9.12
    - Lombok 
* Frontend:
    - React 19.2.0
    - HTML, Javascript, CSS
    - Bootstrap 5.3.8
    - Librería Axios 1.13.5
* Otros:
    - EclipseIDE 2025-12
    - Visual Studio Code
    - GIT/Github
    - postman
    - MySql Workbench
    - Notepad++

## Instalación y configuración
1. Se debe instalar el servidor de bases de datos MySql como servicio de windows en localhost:3306
2. Crear la base de datos **todolistdb** y ejecutar el script de creación de tablas **todolist_tables_creation.sql**
3. Descargar el proyecto Java carpeta **todolist** y compilar con maven: **> mvn clean install** genera el JAR ./target/todolist-0.0.1-SNAPSHOT.jar Ejecutar como aplicacion java en localhost:8080
4. Se puede realizar pruebas desde postman con importando la colección: **./Scripts/todolist.postman_collection.json**
5. Descargar el proyecto React: **react-todolist** y ejecutar el servidor: **> npm run dev** debe tener instalado Node.js, React, Bootstrap despliega en: localhost:5173
6. Acceder a la aplicación en el siguiente URL: **http://localhost:5173/tasks**

## Ejecución Aplicación
### Pantalla principal listado de tareas:
<img width="1363" height="678" alt="image" src="https://github.com/user-attachments/assets/7b1b0f27-486c-4c50-9c07-4bae907e0d07" />

### Pantalla creación tareas:
<img width="1359" height="680" alt="image" src="https://github.com/user-attachments/assets/c22e0d39-cd89-4750-ba09-9d7141384366" />





