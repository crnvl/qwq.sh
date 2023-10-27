import type { NextApiRequest, NextApiResponse } from "next";
import ShortUrl from "../../models/shortUrl";
import { connectDB } from "../../utils/connect";
import { generateKey } from "../../utils/keyUtils";

type Data = SucceededData | FailedData;

type SucceededData = {
  url: string;
};
type FailedData = {
  error_message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method !== "POST") {
    res.status(405).json({ error_message: "Method not allowed" });
    return;
  }

  await connectDB();
  const data = req.body;

  if (!data || !data.url) {
    res.status(400).json({ error_message: "Invalid URL" });
    return;
  }

  let keyLength = 5;
  let key = generateKey(keyLength);

  while (await ShortUrl.findOne({ key: key })) {
    keyLength++;
    key = generateKey(keyLength);
  }

  const shortUrl = await ShortUrl.create({ url: data.url, key: key });

  let domain = process.env.DOMAIN;
  res.status(200).json({ url: `https://${domain}/${shortUrl.key}` });
}
