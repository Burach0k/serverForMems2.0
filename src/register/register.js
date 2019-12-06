const express = require("express");
const pool = require("../dbCofig/index");

const router = express.Router();

router.post("/", function(request, response) {
  const data = request.query;

  if (data.name && data.password)
    pool.query(
      `insert into users (name, password) values ('${data.name}', ${data.password});`,
      () => {
        response.sendStatus(200);
      }
    );
});

router.get("/", function(request, response) {
  pool.query("select * from users;", (er, res) => {
    response.send(res.rows);
  });
});

module.exports = router;
