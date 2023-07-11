import connectToDatabase from './mongodb';

export default async function handler(req, res) {
  try {
    // Connect to the MongoDB database
    const db = await connectToDatabase();

    // Handle your API logic using the MongoDB connection (e.g., CRUD operations)

    // Example: Fetch expenses from a collection named "expenses"
    const expenses = await db.collection('expenses').find().toArray();

    // Send the response with the fetched expenses
    res.status(200).json(expenses);
  } catch (error) {
    console.error('Error handling API request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
