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
  // POST route code here
});

module.exports = router;
