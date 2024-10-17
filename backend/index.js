// server.js or app.js
const express = require('express');
const connectDB = require('./config/database');
const router = require('./routes/ruleRoutes')
const cors = require('cors');

const app = express();

connectDB();  // Connect to MongoDB
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/rules', router);

app.get('/', (req, res) => {
  res.send('API is running');
});
const PORT = 5004;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});