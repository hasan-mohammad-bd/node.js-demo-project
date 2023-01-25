

module.exports.getProducts = (req, res, next)=>{
    // res.send('tools found')
    res.render('views.ejs', {
        id: 1,
        user: 'hasan'
    })
}

module.exports.saveProducts = (req, res) => {
    res.send('all tools saved')
};

module.exports.productDetails = (req, res, next)=>{
    res.send('product details')
}