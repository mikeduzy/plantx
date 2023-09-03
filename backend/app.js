import cors from "cors";
import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
// import run from './index.js'; // Not needed anymore as implemented into app.js
const app = express();
const port = 4000;

const uri =
  "mongodb+srv://database_plantx:FRQMHjgcl0FyHolz@plantx.0rn7wzd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());

app.get("/Plants", async (req, res) => {
  try {
    await client.connect(); // Connect to MongoDB
    const database = client.db("PlantX"); // Conecction to PlantX DB
    const PlantsCollection = database.collection("Plants"); // Connection to Plants Collection
    const Plants = await PlantsCollection.find().toArray(); // Find all documents
    res.json(Plants); // Send the retrieved Data as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving data." });
  }
});

// Postman install as a tool -> check for requests
app.post("/Plants", async (req, res) => {
  try {
    await client.connect(); // Connect to MongoDB
    const database = client.db("PlantX"); // Conecction to PlantX DB
    const PlantsCollection = database.collection("Plants"); // Connection to Plants Collection
    const Plants = await PlantsCollection.insertOne(req.body); // req.body for insertion of Plants into DB from the Frontend!!!
    res.status(201).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving data." });
  }
});

app.get("/Plantlisting", async (req, res) => {
  try {
    await client.connect(); // Connect to MongoDB
    const database = client.db("PlantX"); // Conecction to PlantX DB
    const PlantlistingCollection = database.collection("Plantlisting"); // Connection to Plants Collection
    const Plantlisting = await PlantlistingCollection.find().toArray(); // Find all documents
    res.json(Plantlisting); // Send the retrieved Data as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving data." });
  }
});

// Postman install as a tool -> check for requests
app.post("/Plantlisting", async (req, res) => {
  try {
    await client.connect(); // Connect to MongoDB
    const database = client.db("PlantX"); // Conecction to PlantX DB
    const PlantlistingCollection = database.collection("Plantlisting"); // Connection to Plants Collection
    const Plantlisting = await PlantlistingCollection.insertOne(req.body); // req.body for insertion of Plants into DB from the Frontend!!!
    res.status(201).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving data." });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//await run()
