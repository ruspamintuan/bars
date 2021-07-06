const { MongoClient, ObjectID } = require('mongodb')
const express = require('express')
const app = express()

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'bars_db'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    console.log('Connected successfully!')

    db.collection('billings').insertMany(([
        {
            billingCycle: 1,
            billingMonth: 'January',
            amount: 7000,
            startDate: new Date('2013-01-15'),
            endDate: new Date('2013-02-14'),
            lastEdited: 'admin',
            account: {
                accountName: 'AIRA FAUNA ANSAY',
                dateCreated: new Date(),
                isActive: 'Y',
                lastEdited: 'admin',
                customer: {
                    firstName: 'Aira Fauna',
                    lastName: 'Ansay',
                    address: 'Silang, Cavite',
                    status: 'Y',
                    dateCreated: new Date(),
                    lastEdited: 'admin'
                }
            }
        },
        {
            billingCycle: 1,
            billingMonth: 'January',
            amount: 15000,
            startDate: new Date('2016-01-15'),
            endDate: new Date('2016-02-14'),
            lastEdited: 'admin',
            account: {
                accountName: 'STEPHEN ABAD',
                dateCreated: new Date(),
                isActive: 'Y',
                lastEdited: 'admin',
                customer: {
                    firstName: 'Stephen',
                    lastName: 'Abad',
                    address: 'Metro Manila',
                    status: 'Y',
                    dateCreated: new Date(),
                    lastEdited: 'admin'
                }
            }
        },
        {
            billingCycle: 2,
            billingMonth: 'February',
            amount: 10000,
            startDate: new Date('2016-02-01'),
            endDate: new Date('2016-02-28'),
            lastEdited: 'admin',
            account: {
                accountName: 'STEPHEN ABAD',
                dateCreated: new Date(),
                isActive: 'Y',
                lastEdited: 'admin',
                customer: {
                    firstName: 'Stephen',
                    lastName: 'Abad',
                    address: 'Metro Manila',
                    status: 'Y',
                    dateCreated: new Date(),
                    lastEdited: 'admin'
                }
            }
        },
        {
            billingCycle: 1,
            billingMonth: 'January',
            amount: 25000,
            startDate: new Date('2016-01-01'),
            endDate: new Date('2016-01-31'),
            lastEdited: 'admin',
            account: {
                accountName: 'DANIEL JEORGE BARRION',
                dateCreated: new Date(),
                isActive: 'Y',
                lastEdited: 'admin',
                customer: {
                    firstName: 'Daniel Jeorge',
                    lastName: 'Barrion',
                    address: 'Mandaluyong City',
                    status: 'Y',
                    dateCreated: new Date(),
                    lastEdited: 'admin'
                }
            }
        },
        {
            billingCycle: 1,
            billingMonth: 'January',
            amount: 25000,
            startDate: new Date('2016-01-01'),
            endDate: new Date('2016-01-31'),
            lastEdited: 'admin',
            account: {
                accountName: 'DANIEL JEORGE BARRION',
                dateCreated: new Date(),
                isActive: 'Y',
                lastEdited: 'admin',
                customer: {
                    firstName: 'Daniel Jeorge',
                    lastName: 'Barrion',
                    address: 'Mandaluyong City',
                    status: 'Y',
                    dateCreated: new Date(),
                    lastEdited: 'admin'
                }
            }
        }
    ]))

})
