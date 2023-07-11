import { MongoClient } from 'mongodb';

// Connection URL and options
const uri = 'mongodb://localhost:27017';
const dbName = 'dataDB';

// Helper function to establish a MongoDB connection
async function connectToDatabase() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Get the database instance
    const db = client.db(dbName);

    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectToDatabase;
