import { JWT } from "google-auth-library";

export const getGoogleAccessToken = async () => {
  const key = require("@/assets/service-account.json");
  const client = new JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });
  const token = await client.authorize();

  return token;
};
