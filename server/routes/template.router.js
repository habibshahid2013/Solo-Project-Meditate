const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated,  (req, res) => {
  let queryText, queryParams;
  if (req.user.authLevel !== 'ADMIN') {
    //Admins see all user 
    queryText = `SELECT * FROM "user"`
    queryParams = [];
    return;

  }
  else {
    queryText = `
        SELECT * FROM "user"
        WHERE id = $1
    `;
    queryParams = [req.user.id];

  }
  pool.query(queryText, queryParams)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created form
  const insertRegistrationQuery = `
  INSERT INTO "user_info" ( "email", "username", "password", "spritual_belief", "preferred_method")
  VALUES ($1, $2, $3, $4, $5)
  RETURNING "id";`

  // FIRST QUERY Add Form
  pool.query(insertRegistrationQuery, [req.body.email, req.body.username, req.body.password, req.body.spiritualBelief, req.body.preferred_method])
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
