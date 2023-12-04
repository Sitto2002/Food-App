const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbname = 'Saksham';
const client = new MongoClient(url);

async function dbConnect2() {
    let result = await client.connect();
    let db = result.db(dbname);

    let collection = db.collection('Food-Category');
    let catData = await collection.find({}).toArray();
    global.catData = catData;

}

module.exports = dbConnect2;