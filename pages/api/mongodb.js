import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const url = 'mongodb://localhost:27017';
  const dbName = 'dataDB';

  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);

    // Perform your MongoDB operations here
    // Example: Fetch expenses data
    const collection = db.collection('expenses');
    const data = await collection.find().toArray();

    client.close();

    res.status(200).json(data);
  } catch (error) {
    console.error('Error occurred while connecting to MongoDB:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
