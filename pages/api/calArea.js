export default function handler(req, res) {
    if (req.method === 'POST') {
        const base = req.body.base
        const height = req.body.height
        const cal = (0.5) * base * height;
        res.status(200).json({ area: cal })
    }
}
