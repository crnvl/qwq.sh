import config from '../config.json'
import { connect } from 'mongoose';

export const connectDB = async () => {
    connect(config.connectionUri, (err) => {
    if (err)
        throw err;
    console.log('Connected to MongoDB');
})
}