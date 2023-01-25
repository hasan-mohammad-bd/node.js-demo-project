const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const dbConnect = require('./utility/dbConnect');
const productsRoute = require('./routes/v1/products.route');
const viewCount = require('./middleware/viewCount');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use(express.json())
// app.use(viewCount);
app.set('view engine', 'ejs');


app.use('/api/v1/product', productsRoute)

dbConnect()

app.get('/', (req, res)=>{
    // res.send('hello world')
    res.status(200).send({
        success: true, 
        message: 'Success',
        data: "the data"
    })
    res.status(500).send({
        
    })
})

app.all('*',(req, res) =>{
    res.send('no pages found please go to correct page')
})

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})

//to handle very critical error blew code should be written.

process.on('unhandledRejection', (error)=>{
    console.log(error.name, error.message);
    app.close(()=>{
        process.exit(1);

    });
})