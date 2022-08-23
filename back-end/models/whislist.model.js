const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const whislistSchema = new Schema({
    whislist: {
        title: String,
        author: String,
    },
}, {
    timestamps: true,
});

const Whislist = mongoose.model('Whislist', whislistSchema);

module.exports = Whislist;