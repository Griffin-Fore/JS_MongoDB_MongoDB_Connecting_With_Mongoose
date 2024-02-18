import { connect } from 'mongoose';
import dotenv from  'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName: 'my-first-db',
        });
        console.log('Pinged your deployment. You successfuully connected to MongoDB!');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default dbConnect;