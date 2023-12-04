const express = require('express');
const router = express.Router();
const Order = require("../models/Orders")

router.post('/orderData', async (req, resp) => {
    let data = req.body.order_data;
    await data.splice(0, 0, {Order_date: req.nody.order_date})

    let eId = await Order.findOne({'email': req.body.email})
    console.log(eId)

    if(eId === null){
    try {
        await Order.create({
            email: req.body.email,
            order_data: [data]
    }).then( () => {
        resp.json({ success: true })
    })
}
    catch (error) {
        console.error(error.message);
        resp.send("Server Error", error.message);
    }
}  
else {
    try {
        await Order.findOneAndDuplicate({email: req.body.email},
        { $push: { order_data: data} }).then( () => {
            resp.send({ success: true })
        })
     } catch (error) {
        console.error(error.message);
        resp.send("Server Error");
    }
}
})

module.exports = router;
