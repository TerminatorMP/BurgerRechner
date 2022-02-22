var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect(process.env.MONGO_CONNECTION, (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to Database');

    const db = client.db('cluster0')
    const ordersCollection = db.collection('orders')

    router.post('/add', (req, res) => {
        ordersCollection.insertOne(req.body)
            .then(result => {
                console.log(result)
            })
            .catch(error => console.error(error))
    })

    router.post('/remove', (req, res) => {
        console.log("delete number: " + req.body.id)
        ordersCollection.updateOne(
            {
                nummer: req.body.id,
                open: true,
            },
            {
                $set: {
                    open: false
                }
            })
        .then(result => {
            console.log(result)
        })
        .catch(error => console.error(error))
    })

router.get('/all', (req, res) => {
    console.log("Orders all")
    ordersCollection.find({open: true}).toArray()
        .then(result => {
            res.json(result)
        })
        .catch(error => console.error(error))
    })

    router.get('/weekly', (req, res) => {

        const dateBeforeOneWeek = new Date();
        dateBeforeOneWeek.setDate(dateBeforeOneWeek.getDate()-7);
        console.log("Date before 1 week: " + Date.parse(dateBeforeOneWeek.toString()));

        ordersCollection.find({created_at: { $gt: Date.parse(dateBeforeOneWeek.toString()) }})
            .toArray()
            .then(result => {
                    res.json(result)
            })
            .catch(error => console.error(error))
    })
})

module.exports = router;
