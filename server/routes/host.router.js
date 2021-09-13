const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT * FROM "events"`;
    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('events GET failed', err);
            res.sendStatus(500)
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body);
    // RETURNING "id" will give us back the id of the created form
    const preferred_method = req.body.preferred_method;
    const date = req.body.date;
    const time = req.body.time;
    const address = req.body.address;
    const numberOfPeople = req.body.numberOfPeople

    const insertHostQuery = `
  INSERT INTO "events" ("preferred_method", "date", "time", "address", "numberOfPeople")
  VALUES ($1, $2, $3, $4, $5)
  RETURNING "id";`

    // FIRST QUERY Add Form
    pool.query(insertHostQuery, [preferred_method, date, time, address, numberOfPeople])
        .then(result => {
            console.log('New Register Id:', result.rows[0].id); //ID IS HERE!

            res.sendStatus(201);
        }).catch(err => {
            // catch for second query
            console.log(err);
            res.sendStatus(500)
        })
})

module.exports = router;