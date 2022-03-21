const express = require('express');
const connectDB = require('./server/databsae/connection');
const app = express();
const path = require('path')

app.use(express.json({ extended: false }));
// app.use('/api/userModel', require('./Api/User'));
const Port = process.env.Port || 3000;

connectDB();

app.set("view engine", "html")
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'))

app.listen(Port, () => { console.log(`Server started at http://localhost:${Port}`)});