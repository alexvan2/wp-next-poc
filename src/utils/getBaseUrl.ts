export default function getBaseUrl() {
  return `https://${process.env.VERCEL_URL}`;
}
