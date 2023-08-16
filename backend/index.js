import { MongoClient } from 'mongodb'
// Replace the uri string with your connection string.
const uri = "mongodb+srv://database_plantx:FRQMHjgcl0FyHolz@plantx.0rn7wzd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
export default async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);