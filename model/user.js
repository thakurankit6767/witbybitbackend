import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    studentName: String,
    classNo: String,
    // result: String,
    score: Number,
    // grade: String
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;