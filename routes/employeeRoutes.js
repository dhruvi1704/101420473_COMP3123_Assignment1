const express = require('express');
const Employee = require('../models/employee');
const router = express.Router();

// GET all employees
router.get('/employees', async (req, res) => {
    const employees = await Employee.find();
    res.status(200).json(employees);
});

// POST a new employee
router.post('/employees', async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json({ message: "Employee created successfully", employee_id: newEmployee._id });
});

// GET employee by ID
router.get('/employees/:eid', async (req, res) => {
    const employee = await Employee.findById(req.params.eid);
    res.status(200).json(employee);
});

// PUT update employee
router.put('/employees/:eid', async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.eid, req.body);
    res.status(200).json({ message: "Employee details updated successfully" });
});

// DELETE employee by ID
router.delete('/employees/:eid', async (req, res) => {
    await Employee.findByIdAndDelete(req.params.eid);
    res.status(204).json({ message: "Employee deleted successfully" });
});

module.exports = router;
