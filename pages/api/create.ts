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
    res.setHeader('Access-Control-Allow-Origin', '*');

    await connectDB()
    const url = JSON.parse(req.body).url;

    let keyLength = 5;
    let key = Math.random().toString(36).substring(2, keyLength) + Math.random().toString(36).substring(2, keyLength);
    
    while (await ShortUrl.findOne({ key: key })) {
        keyLength++;
        key = Math.random().toString(36).substring(2, keyLength) + Math.random().toString(36).substring(2, keyLength);
    }

    const shortUrl = await ShortUrl.create({ url: url, key: key });
    res.status(200).json({ url: `https://qwq.sh/${shortUrl.key}` });
}
