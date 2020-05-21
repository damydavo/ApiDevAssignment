# Api consumption/api-crud implementation
An Assesment for Aureole Consulting Limited

# Technology Stack Used
..* Express
..* MongoDB

# INFORMATION GUIDE
> The project has two folders books for the API CONSUMPTION and V1 folder to the CRUD IMPLEMENTATION.
..* books
..* v1
..* to access books CD to books from the command line
..* to access v1 cd .. to root directory and cd to v1

# INSTALLATION GUIDE
git clone https://github.com/damydavo/ApiDevAssignment.git
cd books to get the api consumption
cd .. 
cd v1 to get the api CRUD
npm install
npm app.js

# MVC
Strictly Postman, No need of view

# Database Schema
### Posts
..* name
..* isbn
..* authors
..* country
..* number_of_pages
..* publisher
..* release_date

# Route Api
..* Books

| Routes              | HTTP          | Description              |
| ------------------- |:-------------:| ------------------------:|
| /api/v1/books       | GET           | Get All Books            |
| /api/v1/books/:Id   | GET           | Get A Single Book        |
| /api/v1/books       | POST          | Create A book            |
| /api/v1/books/:Id   | PUT           | Update data of a book    |
| /api/v1/books/:Id   | DELETE        | Delete a Book            |