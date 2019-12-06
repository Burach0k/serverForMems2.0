const { Pool } = require("pg");

const pool = new Pool({
  user: "yzeykswxfzcskv",
  host: "ec2-174-129-254-223.compute-1.amazonaws.com",
  database: "d50d0hfpc8q7tb",
  password: "502a31bec8960eb8c166a7dc41046baa92fc6338f2238a09a9ba3af8cd591b03",
  port: 5432,
  ssl: true
});

module.exports = pool;
