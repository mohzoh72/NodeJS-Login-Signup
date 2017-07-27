var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser')

// Serving static files
var assetsPath = path.join(__dirname, '/');
app.use(express.static(assetsPath))

// Parsing the request object every time. Values can be accessed from body
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/otp', function (req, res) {
    res.sendFile(path.join(__dirname + '/otp.html'));
});

app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname + '/register.html'));
});

app.get('/dashboard', function (req, res) {

    // Check session here, If user not logged in then redirect to login else continue.
    
    res.sendFile(path.join(__dirname + '/dashboard.html'));
});

app.post('/register/api/v1', function (req, res) {
    let body = req.body
    let username = body.username
    let email = body.email
    let password = body.password
    // Saving and processing the data
    // Schedule OTP Email and SMS here and save otp in DB cross referenced with contact number
    // Just printing OTP as of now
    let otp = parseInt(Math.random() * 10000)

    console.log('otp',otp)
    res.json({"code": 200});
    res.send();
});

app.post('/validate_otp/api/v1', function (req, res) {
    let body = req.body
    let otp = body.otp
   
    // Validate OTP from DB and return response accordingly, For now returning Success ({"code": 200})
    // We can login the user directly here as his details have been verified 

    console.log('Congratulations you have been registered successfully')
    res.json({"code": 200});
    res.send();
});

app.post('/login/api/v1/', function (req, res) {
    let body = req.body
    let email = body.email
    let password = body.password
   
    // Validate login information from DB and return response accordingly, For now returning Success ({"code": 200})

    console.log('User: '+email+'Logged in successfully')
    res.json({"code": 200});
    res.send();
});

app.listen(3000);

console.log("Running at Port 3000");