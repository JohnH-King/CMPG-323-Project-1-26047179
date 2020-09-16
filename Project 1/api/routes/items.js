const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Items were fetched'
    });
});

router.post('/', (req, res, next) => {
    const item = {
        name: req.body.name,
        price: req.body.price
    };      //doc
    res.status(201).json({
        message: 'Item was created',
        createdProduct: product
    });
});

//dynamic pop parameter
router.patch('/:ItemId', (req, res, next) => {
    res.status(200).json({
        message: 'Item details',
        ItemId: req.params.ItemId
    });
});

router.delete('/:ItemId', (req, res, next) => {
    res.status(200).json({
        message: 'Item deleted',
        ItemId: req.params.ItemId
    });
});

module.exports = router;