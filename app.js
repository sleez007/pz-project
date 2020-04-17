const express = require('express');
const path = require('path');
const  bodyParser = require("body-parser");

const appRoutes = require('./routes/appRoutes');

const adminRoutes = require('./routes/adminRoutes');


const app = express();

app.set("view engine", "ejs");

app.set("views" , "views");

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")))

app.use('/admin', adminRoutes);
app.use(appRoutes)



app.listen(process.env.port  || 3000)