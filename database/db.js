import mongoose from 'mongoose';
// const dotenv = require("dotenv").config();
const Connection = async (username, password) => {
    // const URL = `// mongodb+srv://ankit:ankit12345@cluster0.rrtc5u1.mongodb.net/?retryWrites=true&w=majority
    // `

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;