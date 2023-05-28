import { NextApiRequest, NextApiResponse } from "next";
import TrackingInfo from "../../models/trackingInfo";
import { connectDB } from "../../utils/connect";

type Data = {
    clicks: Number,
    lastClick: Date,
    success: Boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    await connectDB();
    const key = req.body.key;

    if (key === "[id]") {
        res.json({ clicks: 0, lastClick: new Date(), success: false });
        return
    }

    const stats = await TrackingInfo.findOne({ key: key });

    if (stats) {
        res.json({ clicks: stats.clicks, lastClick: stats.lastClick, success: true });
        return
    }
    res.json({ clicks: 0, lastClick: new Date(), success: false });
}