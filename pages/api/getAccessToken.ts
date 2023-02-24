// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getGoogleAccessToken } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const token = await getGoogleAccessToken();

    res.status(200).json({ token: token?.access_token });
  } catch (e) {
    console.error(e);
  }
}
