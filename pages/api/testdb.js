export default async (req, res) => {
    const testTable=req.db.get("test-table");
    if (req.method === 'POST') {
        let inserted=await testTable.insert(JSON.parse(req.body));
        return res.json(inserted);
    } else {
        return res.json(await testTable.find());
    }
}
