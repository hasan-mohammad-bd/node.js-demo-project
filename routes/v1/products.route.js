const express = require('express');
const router = express.Router();
const {ObjectId}= require('mongodb');
const productContorller = require('../../controler/products.controler');
const viewCount = require('../../middleware/viewCount');

router.post('/', async (req, res)=>{
    const product = req.body;
    const result = await productCollection.insertOne(product);
    res.send(result)
})
/* router.get('/product', async (req, res)=>{
    const theWrite = "What the hell is going on"
    res.send(theWrite)
})

router.get('/:id', async (req, res)=>{
    const id = req.params.id
    const filter = {_id : ObjectId(id)}
    const product = await productCollection.findOne(filter);
    res.send(product)
}) */

router.route('/')
    .get(productContorller.getProducts)
    .post(productContorller.saveProducts)

router.route('/:id')
    .get(viewCount, productContorller.productDetails)

module.exports = router;