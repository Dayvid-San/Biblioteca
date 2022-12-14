const mongoose = require('mogoose');
const fs = require('fs');
const path = require('path');


const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

