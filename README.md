# Api consumption/api-crud implementation
An Assessment for Aureole Consulting Limited

# Technology Stack Used
 1. Express
 2. MongoDB

# INFORMATION GUIDE
> The project has two folders books: for the API CONSUMPTION and V1: folder to the CRUD IMPLEMENTATION.
 1. books
 2. v1
 3. to access books CD to books from the command line
 4. to access v1 cd .. to root directory and cd to v1

# INSTALLATION GUIDE
1. git clone https://github.com/damydavo/ApiDevAssignment.git
2. cd books to get the api consumption
3. cd .. 
4. cd v1 to get the api CRUD
5. npm install....to install dependencies
6. node app.js....to start the server

# MVC
Strictly Postman, No need of view

# Database Schema
### Posts
 1. name
 2. isbn
 3. authors
 4. country
 5. number_of_pages
 6. publisher
 7. release_date

# Route Api
 Books

| Routes              | HTTP          | Description              |
| ------------------- |:-------------:| ------------------------:|
| /api/v1/books       | GET           | Get All Books            |
| /api/v1/books/:Id   | GET           | Get A Single Book        |
| /api/v1/books       | POST          | Create A book            |
| /api/v1/books/:Id   | PUT           | Update data of a book    |
| /api/v1/books/:Id   | DELETE        | Delete a Book            |