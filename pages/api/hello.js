// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //console.log(req.url);
  res.status(200).json({ url: req.url })
}
