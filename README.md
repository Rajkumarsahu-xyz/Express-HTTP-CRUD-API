# Express HTTP CRUD API  

## Implement the following APIs  

### Fetch todo list: GET /todos  
should return an array of existing todos in the following format:  
```bash
{
  "todos": [
    {
      "id": 1,
      "text": "Todo 1",
      "isCompleted": false
    },
    {
      "id": 2,
      "text": "Todo 2",
      "isCompleted": false
    },
    {
      "id": 3,
      "text": "Todo 3",
      "isCompleted": true
    }
  ]
}
```
### Fetch Todo Detail: GET /todos/:id  
Should return the todo having the id specified in the url. If the todo is found, return the todo object along with the status code 200. If no todo is found, you should return a response with the status code 404.  
Examples:  

GET /todos/1
```bash
{
  "id": 1,
  "text": "Todo 1",
  "isCompleted": false
}
```
GET /todos/30303
```bash
{
  "message": "not found"
}
```
### Create Todo: POST /todos
This API will create a todo, store it in the database and return the created todo  
Example:  

Request Body:
```bash
{
  "text": "Learn SQL",
  "isCompleted": false
}
```
Response Body:
```bash
{
  "id": 5,
  "text": "Learn SQL",
  "isCompleted": false
}
```
### Update Todo: PUT /todos/:id
This API updates a particular todo. The request body must contain all the fields in the todo and the response must return the updated todo

### Delete Todo: DELETE /todos/:id
This API deletes the specified todo identified by the id path parameter.

## Getting Started  

**Clone the repo from GitHub**  
```bash
git clone https://github.com/Rajkumarsahu-xyz/Express-HTTP-CRUD-API.git
```

**cd to the Express-HTTP-CRUD-API directory**
```bash
cd Express-HTTP-CRUD-API
```

**Install npm packages and modules**
```bash
npm install
```
You can also install individual packages using ```npm i <package-name>```.
To install and configure ESLint, Husky and Prettier, follow this [link](https://dev.to/ruppysuppy/automatically-format-your-code-on-git-commit-using-husky-eslint-prettier-in-9-minutes-45eg).  

**Install and Setup PostgreSQL**  
Follow this link to install and set up Postgresql in your system - [Link](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart).  

Create a postgres user using ```CREATE USER <user-name> WITH SUPERUSER PASSWORD '<password>'``` and create a database using ```createdb <database-name>```.  

In **db.js** go to Sequelize url and change it to your username, password, host and database respectively.
```bash
postgres://<username>:<password>@localhost/<database>
```
Create a table named **todos**.  
```bash
CREATE TABLE todos (
  id INTEGER SERIAL PRIMARY KEY,
  text VARCHAR(255),
  isCompleted BOOLEAN
);
```

**Usage**
To run the server :
```bash
node server.js
```
Now go to your Postman for running the APIs ```/GET```, ```/POST```, ```/PUT```, ```/DELETE``` on ``````.
