const express = require('express');
const Test = require('../models/test'); // Import the test model
const router = express.Router();



// GET all documents from the "test" collection
router.get('/test', async (req, res) => {
    try {
        const tests = await Test.find(); // Fetch all documents
        res.status(200).json(tests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new document to the "test" collection
router.post('/test', async (req, res) => {
    const newTest = new Test(req.body); // Create a new document using the request body
    try {
        const savedTest = await newTest.save();
        res.status(201).json(savedTest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
