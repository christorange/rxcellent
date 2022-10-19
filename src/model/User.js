// mongodb
const mongoose = require('../db/mongodb')
const bcrypt = require('bcrypt')
// new user table
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        set(val){
            return bcrypt.hashSync(val, 10)
        },
        select: false
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    updateTime: {
        type: Date,
        default: Date.now
    }
})

// build up users' data model
const User = mongoose.model('User', UserSchema)
module.exports = { User }