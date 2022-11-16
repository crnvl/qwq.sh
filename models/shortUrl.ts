import {Schema} from 'mongoose';
import mongoose from 'mongoose';

const shortUrlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    }
});

const ShortUrl = mongoose.models.ShortUrl || mongoose.model('ShortUrl', shortUrlSchema);
export default ShortUrl;