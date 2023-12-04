const express = require('express');
const router = express.Router();

router.post('/foodData', (req, resp) => {
    try {
        console.log([global.itemData, global.catData]);
        resp.send([global.itemData, global.catData]);
    } catch (error) {
        console.error(error.message);
        resp.send("Server Error");
    }
})

module.exports = router;