/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/week06_lab', {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
});

const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api/v1/user', userRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/v1/emp', employeeRoutes);
*/


const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

// Use your MongoDB Atlas connection string
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://dhruvi:dhruvi@cluster0.armxn.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority&appName=Cluster0', {})
.then(() => {
    console.log("Connected to MongoDB Atlas database 'week06_lab' successfully!");
})
.catch((err) => {
    console.error("Failed to connect to MongoDB Atlas", err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  