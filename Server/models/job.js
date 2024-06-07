const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    contactEmail: {
        type: String,
        // required: true
    },
    contactPhone: {
        type: String,
    }
});

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            // required: true,
        },
        type: {
            type: String,
            // required: true,
        },
        description: {
            type: String,
        },
        location: {
            type: String,
            // required: true,
        },
        salary: {
            type: String,
            // required: true,
        },
        company: {
            type: companySchema,
        },
    }
)

const Job = mongoose.model('job', jobSchema)
module.exports = Job