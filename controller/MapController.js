// Hier komt de back-end code voor de map --> Jonna//
const map = async (req, res) =>
{
//   if (req.query && req.query.park)
//  {
    const query = { park: req.query.park };
    const hondenmaatjes = await db.collection("matches").find(query).toArray();
    res.render('pages/match', { hondenmaatjes });
 // }
//   else
//   {
//     const hondenmaatjes = await db.collection("matches").find({}, {}).toArray();
//     res.render('overzicht2', { hondenmaatjes: hondenmaatjes });
//   }
};

module.exports = {
    map:map,
  };
  