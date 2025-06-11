
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactRoutes = require('./routes/contacts');
const leadRoutes = require('./routes/leads');

app.use('/api/contacts', contactRoutes);
app.use('/api/leads', leadRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

