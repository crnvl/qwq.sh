import { Schema } from "mongoose";
import mongoose from "mongoose";

const trackingInfoSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    lastClick: {
        type: Date,
        required: false,
        default: null
    }
});

const TrackingInfo = mongoose.models.TrackingInfo || mongoose.model('TrackingInfo', trackingInfoSchema);
export default TrackingInfo;