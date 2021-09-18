const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.delete('/remove-session/:id',rejectUnauthenticated, (req, res) => {
    let id = [req.params.id];
    console.log('id is ', id);

    const query = `DELETE FROM "events" WHERE id = $1`;
    pool.query(query, id)
        .then(result => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('Events session DELETE failed', err);
            res.sendStatus(500)
        })
});
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

router.get('/hostid/:id', rejectUnauthenticated, (req, res) => {
    const query = `SELECT * FROM "events"
                   WHERE "id" = $1`;
    pool.query(query, [req.params.id])
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
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    // RETURNING "id" will give us back the id of the created form
    const preferred_method = req.body.preferred_method;
    const date = req.body.date;
    const time = req.body.time;
    const address = req.body.address;
    const numberOfPeople = req.body.numberOfPeople
    const user = req.body.username

    const insertHostQuery = `
  INSERT INTO "events" ("preferred_method", "date", "time", "address", "numberOfPeople", "user"")
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING "id";`

    // FIRST QUERY Add Form
    pool.query(insertHostQuery, [preferred_method, date, time, address, numberOfPeople, user])
        .then(result => {
            console.log('New Register Id:', result.rows[0].id); //ID IS HERE!

            res.sendStatus(201);
        }).catch(err => {
            // catch for second query
            console.log(err);
            res.sendStatus(500)
        })
})

router.put('/edits/:id', rejectUnauthenticated,(req, res) => { 
    const params = [ req.body.preferred_method, req.body.date, req.body.time, req.body.address, req.body.numberOfPeople, req.params.id]
    // const id = req.params.id
    // const preferred_method = req.body.preferred_method;
    // const date = req.body.date;
    // const time = req.body.time;
    // const address = req.body.address;
    // const numberOfPeople = req.body.numberOfPeople
    // console.log('req.params testing', req.params);
    // console.log('req.body testing', req.body);
    
    const query = `
UPDATE "events" 
SET "preferred_method" = $1,
 "date" = $2, 
 "time" = $3, 
 "address" = $4, 
 "numberOfPeople" = $5
WHERE id = $6;
    `;
    pool.query(query, params)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('Host edits PUT failed', err);
            res.sendStatus(500)
        })
});

module.exports = router;