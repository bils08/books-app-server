const router = require('express').Router();
let Whislist = require('../models/whislist.model');

router.route('/').get((req,res) => {
    Whislist.find()
        .then(response => res.json(response))
        .then(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const whislist = req.body.whislist;

    const newWhislist = new Whislist({whislist});

    newWhislist.save()
        .then(() => res.json('data added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;