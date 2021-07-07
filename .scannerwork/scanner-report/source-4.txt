const mongoose = require('mongoose')

const billingSchema = new mongoose.Schema({
    billingCycle: {
        type: Number
    },
    billingMonth: {
        type: String
    },
    amount: {
        type: Number
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    lastEdited: {
        type: String
    },
    account: {
        accountName: {
            type: String
        },
        dateCreated: {
            type: Date
        },
        isActive: {
            type: String
        },
        lastEdited: {
            type: String
        },
        customer: {
            firstName: {
                type: String
            },
            lastName: {
                type: String
            },
            address: {
                type: String
            },
            status: {
                type: String
            },
            dateCreated: {
                type: Date
            },
            lastEdited: {
                type: String
            }
        }
    }
})

const billings = mongoose.model('billings', billingSchema)

module.exports = billings