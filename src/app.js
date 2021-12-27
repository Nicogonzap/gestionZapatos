const express = require('express');
const app = express ();
const path = require ('path');
const mainRouter = require ('./routes/mainRouter')
const port = 3000
const cookieParser = require('cookie-parser')
const session = require('session');


//---------------------Set view engine---------------------
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));


//-----------------Use JSON Files-------------------------
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//-------------------Use Cookies-------------------------
app.use(cookieParser());

//Session
app.use(session({
    secret: 'smallBusinessApp202112',
    resave: true,
    saveUninitialized: true
}));

//------------------Use Method: Process PUt & Delete--------------
app.use(methodOverride('_method'));

//---------------------Declare public folder---------------------
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(port, ()=> console.log('servidor funcionando en el puerto ' + port))

app.use ('/', mainRouter)
