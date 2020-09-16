const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//allows the routes
const CVRoutes = require('./api/routes/CV');
const itemRoutes = require('./api/routes/Items');

app.use(morgan('dev'));//show me if i get a "get" request
app.use(bodyParser.urlencoded({extended: false})); //true supports heavy body
app.use(bodyParser.json());

/*
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works'
    });
}); every request is funeled through*/

//Request is funelled
app.use('/CV', CVRoutes);
app.use('/items', itemRoutes);

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