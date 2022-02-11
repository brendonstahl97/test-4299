const path = require("path");
const router = require("express").Router();

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../pb-and-jj/build/index.html"));
});

module.exports = router;