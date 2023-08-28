//Load Express
const express = require('express');

//Load modules
const path = require('path');
const studentsDB = require('./data/students-db');

//This defines the express application
const app = express();

app.use(express.static('public'));

//This will configure the application using the set method

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//define the root
app.get('/', function (req, res){
    res.redirect('/students');
});

//define other routes
app.get('/home', function (req, res){
    res.render('home');
});

app.get('/students', function (req, res){
    const students = studentsDB.getAll();
    res.render('students/index', { students });
});


//This makes it so the id of the url is dynamically created depending on what the id property of the student is
//So every single student will generate a new page of their information and their own specific url
app.get('/students/:id', function(req, res){
    console.log(`The value for the :id route parameter is: ${req.params.id}`);
    res.render('students/show', {student: studentsDB.getOne(req.params.id)});
});


//I have to create a show ejs, and I need to create a getOne function


//defines the port the APP is hosted on, port is listening on the argument provided
app.listen(3000, function () {
    console.log('listening on port 3000');
});