import type { NextApiRequest, NextApiResponse } from 'next'
import ShortUrl from '../../models/shortUrl';
import { connectDB } from '../../utils/connect';

type Data = {
    url: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.setHeader('Access-Control-Allow-Origin', 'qwq.sh, www.qwq.sh');
    
    await connectDB()
    const url = JSON.parse(req.body).url;
    const key = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);

    const shortUrl = await ShortUrl.create({ url: url, key: key });
    res.status(200).json({ url: `https://qwq.sh/${shortUrl.key}` });
}
