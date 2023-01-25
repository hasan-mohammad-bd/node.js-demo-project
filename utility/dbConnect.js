const {MongoClient, ServerApiVersion} = require('mongodb')

function dbConnect(){

    const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user2:GrMvw9EO05iHfOo5@cluster0.vpxj7.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
}

console.log("db connected");

module.exports = dbConnect;