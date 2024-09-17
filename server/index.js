const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ProductModel = require('./models/Products');
const OrderModel = require('./models/Order');
const AdminAccount = require('./models/AdminAccount');


const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Remove deprecated options
mongoose.connect('mongodb+srv://wazeem:Secret789@cluster0.x0ysh.mongodb.net/PetShop')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// AdminLogin API
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await AdminAccount.findOne({ username, password });
    if (admin) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    console.error('Error finding admin:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get Admin details
app.get('/admin', (req, res) => {
  AdminAccount.findOne({})
    .then((admin) => res.json(admin))
    .catch((err) => res.status(500).json(err));
});

// Update admin details
app.put('/admin', (req, res) => {
  AdminAccount.findOneAndUpdate({}, req.body, { new: true })
    .then((admin) => res.json(admin))
    .catch((err) => res.status(500).json(err));
});

// API to get products
app.get('/products', (req, res) => {
  ProductModel.find({})
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json(err));
});

// API to create a new product
app.post('/CreateProducts', (req, res) => {
  ProductModel.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
});

// API to update a product
app.put('/UpdateProducts/:id', (req, res) => {
  ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
});

// API to delete a product
app.delete('/products/:id', (req, res) => {
  ProductModel.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Product deleted' }))
    .catch((err) => res.status(400).json(err));
});

// API to create a new order
app.post('/orders', (req, res) => {
  OrderModel.create(req.body)
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json(err));
});

// API to get all orders
app.get('/orders', (req, res) => {
  OrderModel.find({})
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json(err));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
