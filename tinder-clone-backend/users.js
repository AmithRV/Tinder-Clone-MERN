import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email:String,
    token:String
});

export default mongoose.model('user', userSchema);