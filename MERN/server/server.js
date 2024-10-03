// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const User = require('./models/User');
// const bcrypt = require('bcryptjs');
// const productRoute = require('./routes/productroutes.js');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// // // Routes
//  app.use('/api/products', productRoute);

// // // Define a route for the root URL
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html')); 
//    });


// // Register route
// app.post('/api/auth/register', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).send({ success: false, message: 'Email already in use.' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();
//     res.status(201).send({ success: true, message: 'User created successfully!' });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).send({ success: false, message: 'Error creating user.' });
//   }
// });

// // Login route
// app.post('/api/auth/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).send({ success: false, message: 'User not found.' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).send({ success: false, message: 'Invalid credentials.' });
//     }

//     res.send({ success: true, message: 'Login successful!' });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).send({ success: false, message: 'Internal Server Error.' });
//   }
// });

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://karthikasekar687:Test123@backend.qjjgg.mongodb.net/Node?retryWrites=true&w=majority&appName=Backend')
//   .then(() => {
//     console.log('Connected to MongoDB!');
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     });
//   })
//   .catch(err => {
//     console.error('Connection failed:', err);
//   });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const multer = require('multer'); // Add multer for file uploads
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const productRoute = require('./routes/productroutes.js');
const Product = require('./models/products'); // Add import for Product model

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up storage for multer
const fs = require('fs');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir); // Make sure the directory is created
}


if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
// API Routes
app.use('/api/products', productRoute);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); 
   });

// Register route
app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ success: false, message: 'Email already in use.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).send({ success: true, message: 'User created successfully!' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).send({ success: false, message: 'Error creating user.' });
  }
});

// Login route
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ success: false, message: 'User not found.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ success: false, message: 'Invalid credentials.' });
    }
    res.send({ success: true, message: 'Login successful!' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send({ success: false, message: 'Internal Server Error.' });
  }
});

// Define storage settings
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Use this middleware for handling form-data requests containing a file
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    const { name, price, quantity, description } = req.body;
    const image = req.file ? req.file.path : '';

    const newProduct = new Product({
      name,
      price,
      quantity,
      description,
      image,
    });

    await newProduct.save();
    res.status(201).json({ success: true, message: 'Product added successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding product.', error: error.message });
  }
});




// Connect to MongoDB
mongoose.connect('mongodb+srv://karthikasekar687:Test123@backend.qjjgg.mongodb.net/Node?retryWrites=true&w=majority&appName=Backend')
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Connection failed:', err);
  });
