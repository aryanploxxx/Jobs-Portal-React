const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const mongoose =  require('mongoose')

// GET all jobs
router.get("/", async (req, res) => {
    try {
        const allJobs = await Job.find({});
        if (!allJobs) {
            return res.status(404).json({ "error": "Jobs not found" });
        }
        return res.status(200).json({ allJobs: allJobs });
    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).json({ "Error": err });
    }
});

// GET job by ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const job = await Job.findById({_id: id});
        if (!job) {
            return res.status(404).json({ "error": "Job not found" });
        }
        return res.status(200).json({ job: job });
    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).json({ "Error": err });
    }
});

// POST create a new job
router.post("/", async (req, res) => {
    try {  
        const title = req.body.title
        const type = req.body.type
        const location = req.body.location
        const description = req.body.description
        const salary = req.body.salary
        const companyName = req.body.name
        const companyDescription = req.body.company_description
        const contactEmail = req.body.contact_email
        const contactPhone = req.body.contact_phone

        if (!title || !type || !location || !salary || !contactEmail) {
            return res.status(400).json({
                error: "Missing required fields: title, type, location, salary, and contactEmail are all required."
            });
        }

        const newJob = {
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone
            }
        };

        const createdJob = await Job.create(newJob);
        return res.status(201).json({ message: "Job created successfully", job: createdJob });
    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).json({ "Error": err });
    }
});

// PUT update a job by ID
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const title = req.body.title
        const type = req.body.type
        const location = req.body.location
        const description = req.body.description
        const salary = req.body.salary
        const companyName = req.body.name
        const companyDescription = req.body.company_description
        const contactEmail = req.body.contact_email
        const contactPhone = req.body.contact_phone

        const updatedJob = {
            id,
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone
            }
        };

        const result = await Job.findByIdAndUpdate(id, updatedJob, { new: true });
        if (!result) {
            return res.status(404).json({ error: "Job not found" });
        }
        return res.status(200).json({ updatedJob: result });
    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).json({ "Error": err });
    }
});

// DELETE a job by ID
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Job.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Job not found" });
        }
        return res.status(200).send();
    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).json({ "Error": err });
    }
});

module.exports = router;
