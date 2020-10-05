const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CVItems = require('../models/CVSchema');
var Schema = new mongoose.Schema;
/*router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /CV'
    });
});*/

router.post('/', (req, res, next) => {
  const CV = {
    //Unique id now done automatically
    name: req.body.name,
    email: req.body.email,
    comments: req.body.comments
  };
  const cvitem = new CVItems({
    name: req.body.name,
    email: req.body.email,
    comments: req.body.comments
  });
  cvitem.save()
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /CV',
        createdItem: cvitem
    });
});

router.get('/:CVId', (req, res, next) => {
    const id = req.params.CVId;
    CVItems.findById(id).exec().then(doc => { //then block
        console.log(doc);
        res.status(200).json(doc);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
        });

});

router.patch('/:CVId', (req, res, next) => {
        res.status(200).json({
        message: 'Updated CV item!'
    });
});

router.delete('/:CVId', (req, res, next) => {
    res.status(200).json({
    message: 'Deleted CV item!'
    });
});


module.exports = router;
