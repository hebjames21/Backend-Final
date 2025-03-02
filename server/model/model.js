const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')

const userSchema = new mongoose.Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, required: true }
});

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
})

const User = mongoose.model('User, userSchema')

const todoSchema = new mongoose.Schema({
    todo: { type: String, required: true},
    created: { type: Number, require}
})