import { connect } from 'mongoose';

export const connectDB = async () => {
    connect(process.env.MONGO_URI || '', (err) => {
    if (err)
        throw err;
    console.log('Connected to MongoDB');
})
}