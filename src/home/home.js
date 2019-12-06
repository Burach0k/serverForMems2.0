const express = require("express");
const router = express.Router();

router.get("/", function(request, response) {
    response.send('Hello, Andrey!');
});

module.exports = router;
