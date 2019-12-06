const express = require("express");
const pool = require("../dbCofig/index");

const router = express.Router();

router.post("/", function(request, response) {
  const data = request.query;

  pool.query(`SELECT * FROM users WHERE name IN ('${data.name}');`,
    (er, res) => {
      if (!res.rows || er) response.sendStatus(400);

      const isExist = res.rows.findIndex(user => +user.password === +data.password);
      const status = isExist !== -1 ? 200 : 400;
      response.sendStatus(status);
    }
  );
});

module.exports = router;
