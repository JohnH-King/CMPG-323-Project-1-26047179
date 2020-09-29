const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /CV'
    });
});

router.post('/', (req, res, next) => {
    const CV = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling POST requests to /CV',
        CV: CV
    });
});

router.get('/:CVId', (req, res, next) => {
    const id = req.params.CVId;
    if (id === 'special'){
        res.status(200).json({
        message: 'You discovered the special ID',
        id: id
    });
    }  else {
        res.status(200).json({
            message: 'You passad an ID'
        });
    }
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
