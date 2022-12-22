import { NextApiRequest, NextApiResponse } from "next";
import ShortUrl from "../../models/shortUrl";
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
    const key = JSON.parse(req.body).key;

    if (key === "[id]") {
        res.json({ url: '/' });
        return
    }

    const url = await ShortUrl.findOne({ key: key });

    if (url) {
        res.json({ url: url.url });
        return
    }
    res.json({ url: '/' });
}
