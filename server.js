// const express = require('express');
// const app = express();
// const { MongoClient } = require('mongodb');


// app.use(express.json());

// // Add CORS configuration if required
// // app.use(cors());

// const port = 3001; // Set the desired port number

// app.post('/api/expenses', async (req, res) => {
//     try {
//       // Extract expense data from the request body
//       const { name, amount, tag } = req.body;
  
//       // Add code to save the expense data to MongoDB
//       const client = new MongoClient(uri, { useUnifiedTopology: true });
//       await client.connect();
//       const db = client.db(dataDB);
//       const collection = db.collection('expenses');
//       const expense = {
//         name,
//         amount,
//         tag,
//       };
//       await collection.insertOne(expense);
//       await client.close();

//       console.log('Expense added to MongoDB:', result.ops[0]);

//       res.status(201).json({ message: 'Expense added successfully' });
//     } catch (error) {
//       console.error('Error adding expense:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
  
  