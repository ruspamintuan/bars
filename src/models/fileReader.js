const mongoose = require('mongoose')
const fs = require('fs')
const dayjs = require('dayjs')
require('../db/mongoose')

const readCsv = async (filename, callback) => {
    fs.readFile(filename, 'utf8', (error, content) => {
        const fileContent = content.toString()
        const billingCycle = []
        const startDate = []
        const endDate = []
        const request = []
        let line = []


        line = fileContent.split('\r\n')

        if (fileContent.length === 0) {
            console.log('No request(s) to read from the input file.')
            console.log('==> End of process')
            return callback({
                error: 'No request(s) to read from the input file.'
            },
                undefined)
        }

        for (i = 0; i <= line.length - 1; i++) {
            let splitArray = []
            splitArray = line[i].split(',')
            if (splitArray.length === 3) {
                billingCycle.push(splitArray[0])
                startDate.push(splitArray[1])
                endDate.push(splitArray[2])
            }
        }

        for (i = 0; i <= line.length - 1; i++) {
            if (billingCycle[i] <= 0 || billingCycle[i] >= 13) {
                console.log(`Billing cycle is not on range at row ${i + 1}`)
                console.log('==> End of process')
                return callback({
                    error: `Billing cycle is not on range at row ${i + 1}`
                },
                    undefined)
            }
            if (!dayjs(startDate[i]).isValid()) {
                console.log(`Invalid start date format at row ${i + 1}`)
                console.log('==> End of process')
                return callback({
                    error: `Invalid start date format at row ${i + 1}`
                },
                    undefined)
            }
            if (!dayjs(endDate[i]).isValid()) {
                console.log(`Invalid end date format at row ${i + 1}`)
                console.log('==> End of process')
                return callback({
                    error: `Invalid end date format at row ${i + 1}`
                },
                    undefined)
            }
        }

        for (i = 0; i <= line.length - 1; i++) {
            request.push({
                billingCycle: billingCycle[i],
                startDate: dayjs(startDate[i]).format('YYYY-MM-DD'),
                endDate: dayjs(endDate[i]).format('YYYY-MM-DD')
            })
        }
        return callback(undefined, request)
    })
}

const readTxt = async (filename, callback) => {
    fs.readFile(filename, 'utf8', (error, content) => {
        const fileContent = content.toString()
        const billingCycle = []
        const startDate = []
        const endDate = []
        const request = []
        let line = []

        line = fileContent.split('\r\n')

        if (fileContent.length === 0) {
            console.log('No request(s) to read from the input file.')
            console.log('==> End of process')
            return callback({
                error: 'No request(s) to read from the input file.'
            },
                undefined)
        }

        for (i = 0; i <= line.length - 1; i++) {
            billingCycle.push(line[i].substring(0, 2))
            startDate.push(line[i].substring(2, 4) + '/' + line[i].substring(4, 6) + '/' + line[i].substring(6, 10))
            endDate.push(line[i].substring(10, 12) + '/' + line[i].substring(12, 14) + '/' + line[i].substring(14, 18))
        }

        for (i = 0; i <= line.length - 1; i++) {
            if (billingCycle[i] <= 0 || billingCycle[i] >= 13) {
                console.log(`Billing cycle is not on range at row ${i + 1}`)
                console.log('==> End of process')
                return callback({
                    error: `Billing cycle is not on range at row ${i + 1}`
                },
                    undefined)
            }
            if (!dayjs(startDate[i]).isValid()) {
                console.log(`Invalid start date format at row ${i + 1}`)
                console.log('==> End of process')
                return callback({
                    error: `Invalid start date format at row ${i + 1}`
                },
                    undefined)
            }
            if (!dayjs(endDate[i]).isValid()) {
                console.log(`Invalid end date format at row ${i + 1}`)
                console.log('==> End of process')
                return callback({
                    error: `Invalid end date format at row ${i + 1}`
                },
                    undefined)
            }
        }

        for (i = 0; i <= line.length - 1; i++) {
            request.push({
                billingCycle: billingCycle[i],
                startDate: dayjs(startDate[i]).format('YYYY-MM-DD'),
                endDate: dayjs(endDate[i]).format('YYYY-MM-DD')
            })
        }
        return callback(undefined, request)
    })
}

module.exports = readCsv
module.exports = readTxt