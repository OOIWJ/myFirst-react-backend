const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const pool = require('./database');

// make sure this comes AFTER dotenv config
const productsRouter = require('./routes/products');

//Register the Cart Router
const cartRoutes = require('./routes/cart');
app.use('/api/cart', cartRoutes);

// Middleware
app.use(express.json());
app.use(cors());

// Register the User Router
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Routes
app.use('/api/products', productsRouter);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to our e-commerc API" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
