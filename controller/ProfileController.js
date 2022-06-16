// Hier komt backend code voor edit profil

const profile = async (req, res) => {
    const user = await db.collection('users').findOne({},{});
    console.log(user)
    res.render('pages/profile', { user });
}

const update = async (req, res) => {
    
    const user = await db.collection('users').replaceOne(
{},
{
    'firstname': req.body.firstname,
    'lastname': req.body.lastname,
    'username': req.body.username,
    'email': req.body.email,
},
{}
    );
    res.redirect('/profile');
    console.log(user)
};


module.exports = {
    profile,
    update,
};

