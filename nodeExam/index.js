const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine(
    'handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
    })
);

app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'));

app.get('/register', (req, res) => res.render('register'));

app.post('/result', function(req, res, next) {
    const {name, email, birthdate, classUser, registrationCode} = req.body;

    res.render("result", {
        title: "Thanks you for your information",
        name, 
        email,
        birthdate,
        classUser,
        registrationCode
    });

    console.log(name)
    console.log(email)
    console.log(birthdate)
    console.log(classUser)
    console.log(registrationCode)
});


app.listen(8000);
console.log('Server listen at http://localhost:8000')