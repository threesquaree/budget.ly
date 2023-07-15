import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const url = 'mongodb://localhost:27017/dataDB';
  const dbName = 'dataDB';

  if (req.method === 'POST') {
    const { name, amount, tag } = req.body;

  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('expenses');
    const data = await collection.find().toArray();

    // Perform your MongoDB operations here
    const result = await collection.insertOne({ name, amount, tag });
    console.log( result.insertedId ); // doesn't work?

    // Example: Fetch expenses data

    await client.close();

    res.status(200).json(data);
  } catch (error) {
    console.error('Error occurred while connecting to MongoDB:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
}