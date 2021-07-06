const express = require('express')
const router = new express.Router()
const billings = require('../models/billing-model')
const multer = require('multer')
const fs = require('fs')
const readCsv = require('../models/fileReader')
const readTxt = require('../models/fileReader')
const dayjs = require('dayjs')
require('mongodb')

//UPLOADING FILES

const storage = multer.diskStorage({
    destination: './bars-files',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({
    storage: storage,
    async fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(txt|csv)$/)) {
            console.clear()
            console.log('File is not supported for processing')
            console.log('==> End of process')
            return cb(new Error('File is not supported for processing'))
        }
        cb(undefined, true)
    }
})

router.post('/upload', upload.single('upload'), async (req, res) => {

    console.clear()
    console.log('=================> Filepath: ' + req.file.filename)
    console.log('==> INSIDE CSV PROCESSING <==')
    console.log('==> Processing Request with three parameters')

    //FOR CSV FILES
    if (req.file.filename.match(/\.(csv)$/)) {
        try {
            await readCsv(req.file.path, async (error, result) => {
                if (error) {
                    return res.status(400).send(error)
                }
                let allFetchedData = []
                let fetched = []

                for (i = 0; i <= result.length - 1; i++) {
                    await billings.findOne(result[i], (error, data) => {
                        fetched[i] = data
                    })
                }
                for (i = 0; i <= fetched.length - 1; i++) {
                    if (fetched[i] === null) {
                        const error = { error: 'No record(s) to write to the output file' }
                        console.log('No record(s) to write to the output file')
                        console.log('==> End of process')
                        return res.status(400).send(error)
                    }
                    allFetchedData.push({
                        billingCycle: fetched[i].billingCycle,
                        startDate: dayjs((fetched[i].startDate)).format('MM/DD/YYYY'),
                        endDate: dayjs((fetched[i].endDate)).format('MM/DD/YYYY'),
                        firstName: fetched[i].account.customer.firstName,
                        lastName: fetched[i].account.customer.lastName,
                        amount: fetched[i].amount


                    })

                }
                console.log('File is valid. Check POSTMAN for results.')
                console.log('==> End of process')
                return res.status(201).send(allFetchedData)
            }
            )
        } catch (error) {
            return res.status(400).send({ message: error.message })
        }
    }
    //FOR TXT FILES
    if (req.file.filename.match(/\.(txt)$/)) {
        try {
            await readTxt(req.file.path, async (error, result) => {
                if (error) {
                    return res.status(400).send(error)
                }
                let allFetchedData = []
                let fetched = []

                for (i = 0; i <= result.length - 1; i++) {
                    await billings.findOne(result[i], (error, data) => {
                        fetched[i] = data
                    })
                }
                for (i = 0; i <= fetched.length - 1; i++) {
                    if (fetched[i] === null) {
                        const error = { error: 'No record(s) to write to the output file' }
                        console.log('No record(s) to write to the output file')
                        console.log('==> End of process')
                        return res.status(400).send(error)
                    }
                    allFetchedData.push({
                        billingCycle: fetched[i].billingCycle,
                        startDate: dayjs((fetched[i].startDate)).format('MM/DD/YYYY'),
                        endDate: dayjs((fetched[i].endDate)).format('MM/DD/YYYY'),
                        firstName: fetched[i].account.customer.firstName,
                        lastName: fetched[i].account.customer.lastName,
                        amount: fetched[i].amount


                    })

                }
                console.log('File is valid. Check POSTMAN for results.')
                console.log('==> End of process')
                return res.status(201).send(allFetchedData)
            }
            )
        } catch (error) {
            return res.status(400).send({ message: error.message })
        }
    }
    return res.status()
}, (error, req, res, next) => {
    return res.status(400).send({ error: error.message })
})

module.exports = router