/*************************************
 * Routes
 **************************************/
app.get('/overzicht', async (req, res) =>
{
  if (req.query && req.query.park)
  {
    const query = { park: req.query.park };
    const hondenmaatjes = await db.collection("hondenmaatjes").find(query).toArray();
    res.render('overzicht2', { hondenmaatjes: hondenmaatjes });
  }
  else
  {
    const hondenmaatjes = await db.collection("hondenmaatjes").find({}, {}).toArray();
    res.render('overzicht2', { hondenmaatjes: hondenmaatjes });
  }
});