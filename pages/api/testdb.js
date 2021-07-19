export default async (req, res) => {
    const { sequelize } = req.db;
    if (req.method === 'POST') {
        let inserted = await sequelize.rooms.create(JSON.parse(req.body));
        return res.json(inserted);
    } else {
        return res.json(await sequelize.rooms.findAll());
    }
}
