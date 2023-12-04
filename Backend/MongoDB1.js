const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbname = 'Saksham';
const client = new MongoClient(url);

async function dbConnect1() {
    let result = await client.connect();
    let db = result.db(dbname);

    let collection = db.collection('Food-Items');
    let itemData = await collection.find({}).toArray();
    global.itemData = itemData;

}

module.exports = dbConnect1;