import type { NextApiRequest, NextApiResponse } from 'next'
import ShortUrl from '../../models/shortUrl';
import { connectDB } from '../../utils/connect';
import { generateKey } from '../../utils/keyUtils';

type Data = {
    url: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    await connectDB()
    const data = JSON.parse(req.body);

    if (!data.url) {
        res.status(400).json({ url: 'Invalid URL' });
        return;
    }
    
    let keyLength = 5;
    let key = generateKey(keyLength);
    
    while (await ShortUrl.findOne({ key: key })) {
        keyLength++;
        key = generateKey(keyLength);
    }
    
    const shortUrl = await ShortUrl.create({ url: data.url, key: key });

    res.status(200).json({ url: `https://qwq.sh/${shortUrl.key}` });
}
