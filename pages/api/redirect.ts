import { NextApiRequest, NextApiResponse } from "next";
import ShortUrl from "../../models/shortUrl";
import TrackingInfo from "../../models/trackingInfo";
import { connectDB } from "../../utils/connect";

type Data = {
    url: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    await connectDB();
    const key = req.body.key;


    if (key === "[id]") {
        res.json({ url: '/' });
        return
    }

    const url = await ShortUrl.findOne({ key: key });

    if (url) {
        res.json({ url: url.url });

        let trackingInfo = await TrackingInfo.findOne({ key: key });

        if (!trackingInfo) {
            trackingInfo = new TrackingInfo({
                key: key,
            });
        }
        trackingInfo.clicks++;
        trackingInfo.lastClick = new Date();
        await trackingInfo.save();

        return
    }
    res.json({ url: '/' + key });
}
