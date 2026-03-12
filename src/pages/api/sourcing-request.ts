export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    console.log("Sourcing request logged:", req.body);
    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}
