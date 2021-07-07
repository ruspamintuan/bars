const { readTxt, readCsv } = require('../src/models/fileReader')


test('Should return empty txt file error message', done => {
    readCsv("C:/BARS_TEST/empty-csv.csv", (error, data) => {
        try {
            expect(error).toStrictEqual({
                error: `No request(s) to read from the input file.`,
            })
            done()
        } catch (error) {
            done(error)
        }
    })
})

test('Should return empty txt file error message', done => {
    readTxt("C:/BARS_TEST/empty-txt.txt", (error, data) => {
        try {
            expect(error).toStrictEqual({
                error: `No request(s) to read from the input file.`,
            })
            done()
        } catch (error) {
            done(error)
        }
    })
})

test('Should return billing cycle range error message', done => {
    readCsv("C:/BARS_TEST/billing-cycle-not-on-range-csv.csv", (error, data) => {
        try {
            expect(error).toStrictEqual({
                error: `Billing cycle is not on range at row 4`,
            })
            done()
        } catch (error) {
            done(error)
        }
    })
})

test('Should return billing cycle range error message', done => {
    readTxt("C:/BARS_TEST/billing-cycle-not-on-range-txt.txt", (error, data) => {
        try {
            expect(error).toStrictEqual({
                error: `Billing cycle is not on range at row 3`,
            })
            done()
        } catch (error) {
            done(error)
        }
    })
})

test('Should return invalid end date error message', done => {
    readTxt("C:/BARS_TEST/invalid-end-date-txt.txt", (error, data) => {
        try {
            expect(error).toStrictEqual({
                error: `Invalid end date format at row 1`,
            })
            done()
        } catch (error) {
            done(error)
        }
    })
})

test('Should return invalid end date error message', done => {
    readCsv("C:/BARS_TEST/invalid-end-date-csv.csv", (error, data) => {
        try {
            expect(error).toStrictEqual({
                error: `Invalid end date format at row 7`,
            })
            done()
        } catch (error) {
            done(error)
        }
    })
})

test('Should return invalid start date error message', done => {
    readCsv("C:/BARS_TEST/invalid-start-date-csv.csv", (error, data) => {
        try {
            expect(error).toStrictEqual({
                error: `Invalid start date format at row 1`,
            })
            done()
        } catch (error) {
            done(error)
        }
    })
})

test('Should return invalid start date error message', done => {
    readTxt("C:/BARS_TEST/invalid-start-date-txt.txt", (error, data) => {
        try {
            expect(error).toStrictEqual({
                error: `Invalid start date format at row 3`,
            })
            done()
        } catch (error) {
            done(error)
        }
    })
})

test('Should return data from the valid file', done => {
    readTxt("C:/BARS_TEST/valid-txt.txt", (error, data) => {
        try {
            expect(data).toStrictEqual([
                { "billingCycle": "01", "endDate": "2013-02-14", "startDate": "2013-01-15" }, { "billingCycle": "01", "endDate": "2016-02-14", "startDate": "2016-01-15" }
            ])
            done()
        } catch (error) {
            done(error)
        }
    })
})

test('Should return data from the valid file', done => {
    readCsv("C:/BARS_TEST/valid-csv.csv", (error, data) => {
        try {
            expect(data).toStrictEqual([
                { "billingCycle": "01", "endDate": "2013-02-14", "startDate": "2013-01-15" }, { "billingCycle": "01", "endDate": "2016-02-14", "startDate": "2016-01-15" }
            ])
            done()
        } catch (error) {
            done(error)
        }
    })
})