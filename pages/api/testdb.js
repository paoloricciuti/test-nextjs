export default async (req, res) => {
    const { rooms } = req.db;
    if (req.method === 'POST') {
        let inserted = await rooms.create(JSON.parse(req.body));
        return res.json(inserted);
    } else {
        return res.json(await rooms.findAll());
    }
}
