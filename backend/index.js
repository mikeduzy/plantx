/* import { MongoClient } from 'mongodb'
// Replace the uri string with your connection string.
const uri = "mongodb+srv://database_plantx:FRQMHjgcl0FyHolz@plantx.0rn7wzd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
export default async function run() {
  try {
    const database = client.db('PlantX');
    const PlantsCollection = database.collection('Plants');

    const Plants = await PlantsCollection.toArray()
    console.log(Plants);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
*/