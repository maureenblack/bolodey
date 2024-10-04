const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bolodey', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/serviceRoutes'));
app.use('/api', require('./routes/paymentRoutes'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});