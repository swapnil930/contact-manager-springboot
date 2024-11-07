# Contact Management Application

This is a full-stack web application for managing contacts, built with **ReactJS** on the frontend and **Spring Boot** on the backend. It allows users to create, view, update, and delete contacts. The app is designed to be fast, responsive, and user-friendly.

## Features

### Frontend
- Built using **ReactJS** with a modern, component-based architecture.
- Interactive UI with live updates for adding, viewing, and editing contacts.
- **Bootstrap** integration for an elegant, responsive design.
- Error handling and loading states with spinners for a smooth user experience.

### Backend
- Powered by **Spring Boot**, with a scalable and efficient REST API.
- **JPA/Hibernate** is used for database management.
- Well-structured CRUD operations with proper HTTP status responses.

## Technologies Used

- **ReactJS** for building the user interface.
- **Axios** for HTTP requests.
- **React Router** for page navigation.
- **Spring Boot** for backend services.
- **JPA/Hibernate** for database management.
- **MySQL** as the database for storing contacts.

## Setup and Installation

### Backend (Spring Boot)

1. Clone the repository:
- Clone the repository: You clone the Spring Boot project from GitHub to your local machine (download zip file and extract it in your system).
- Setup spring tool: Download spring tool and extract it. launch it.
  
```bash
https://spring.io/tools
```
- Open the project: Once download all, open the project folder in an IDE like SpringToolSuite4 for eclips.  
- OR
- Create project: Create new Spring starter project in spring tool.
- Select defendancy:
 1. From SQL section choose 'MYSQL' and 'Spring data'.
 2. From web section choose 'Spring Web'.
 3. From devloper tool section 'Sringboot dev tool' and 'Lambok'.
 4. click 'Next'.
 5. Configure database connection inside Application.Properties (refer code).
 6. Add pakages and create class (follow github files code refernce for creating project structure).
- Run application or server: Inside base package there is class ContactManagerApplication Run that class.
- Now your springboot server will ON.

### Frontend (ReactJS)
  1. Open vsCode terminal (Use Following Commands)
  2. In your project directory: npm install
  3. Create new react Application : npx create-react-app ContactManagerFrontend
  4. Install bootstrap : npm install bootstrap
  5. Install fontAwesome: npm i @fortawesome/fontawesome-free
  6. Connect fontawesome with html page:	Visit fontawesome (fortawesome/fontawesome-free) official website copy the cdn link and paste in index.html.
  7. Install Axios: npm i axios
  8. Install React-Router: npm install react-router-dom@6
  9. All defendancy setup done....
  10. Now inside src file create folder & components structure (refer ContactManagerFrontend file and components code).
  11. Now run application : npm start

### API Endpoints
- POST /contacts: Add a new contact.
- GET /contacts: Get all contacts.
- GET /contacts/{id}: Get a contact by ID.
- PUT /contacts/{id}: Update a contact by ID.
- DELETE /contacts/{id}: Delete a contact by ID.
- Make sure API will be same in both service component & Controller class.

### Screenshots
![image](https://github.com/user-attachments/assets/d81c5b4f-88a6-4cab-92aa-66f3afdeec62)
![image](https://github.com/user-attachments/assets/b4ded839-b239-4fb3-b00c-6c4730cbddd7)
![image](https://github.com/user-attachments/assets/4eda33fa-1290-4102-bf88-3d9c77f61797)
![image](https://github.com/user-attachments/assets/3fb7b9d6-b42b-4170-b7ee-8e814e74ba57)






