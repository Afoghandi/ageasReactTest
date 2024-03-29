import mongoose from 'mongoose';

import config from 'config';
const db = config.get('mongoURI');

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(error.message);

        //exit process with failure
        process.exit(1);
    }
};

export default connectDB;