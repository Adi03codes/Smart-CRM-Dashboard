const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contacts");
const leadRoutes = require("./routes/leads");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/contacts", contactRoutes);
app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// --- backend/models/Contact.js ---
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

module.exports = mongoose.model("Contact", contactSchema);
