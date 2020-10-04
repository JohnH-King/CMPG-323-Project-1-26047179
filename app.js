const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//allows the routes
const CVRoutes = require('./api/routes/CV');

mongoose.connect("mongodb+srv://Johnk858:" + process.env.MONGO_ATLAS_PW +"@clustercv.bmapl.mongodb.net/OnlineCV?retryWrites=true&w=majority",
{ useUnifiedTopology: true,
  useNewUrlParser: true})
.then(() => console.log('Database Connected'))
.catch(err => console.log(err));



app.use(morgan('dev'));//show me if i get a "get" request
app.use(bodyParser.urlencoded({extended: false})); //true supports heavy body
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
/*
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works'
    });
}); every request is funeled through*/

//Request is funelled


app.use('/CV', CVRoutes);

app.use((req, res, next ) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next ) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
