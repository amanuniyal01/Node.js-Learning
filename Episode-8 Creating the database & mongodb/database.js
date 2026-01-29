const { MongoClient,ObjectId } = require("mongodb")
const URL = "mongodb://AmanUniyal:ammu@ac-5dwsmzr-shard-00-00.nc4kwef.mongodb.net:27017,ac-5dwsmzr-shard-00-01.nc4kwef.mongodb.net:27017,ac-5dwsmzr-shard-00-02.nc4kwef.mongodb.net:27017/?replicaSet=atlas-7xw0c3-shard-0&ssl=true&authSource=admin";
const client = new MongoClient(URL)

const dbName = "FirstDatabase"
async function main() {

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User')

    // Find Documents
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    // Insert data
    const data = {

        "firstName": "Anurag",
        "LastName": "Gauniyal",
        "Gender": "Male",
        "City": "Shimla",
        "Age": "18"
    }

    const insertRes=await collection.insertMany([data])
    console.log("Inserted Document:",insertRes)

// Delete Data
const deleteData=await collection.deleteOne({_id: new ObjectId('697b4b41234251dc0ad1f3b5') })
console.log("DeletedData:",deleteData)
    return 'done.';
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());