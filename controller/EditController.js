// Hier komt backend code voor edit profil

const edit = async (req, res) => {
    const user = await db.collection('users').findOne({},{});
    console.log(user)
    res.render('pages/edit-profile', { user });
}

const update = async (req, res) => {
    
    const user = await db.collection('users').replaceOne(
{},
{
    'firstname': req.body.firstname,
    'lastname': req.body.lastname,
    'username': req.body.username,
    'email': req.body.email,
    'password': req.body.password 
},
{}
    );
    res.redirect('/edit');
    console.log(user)
};


module.exports = {
    edit,
    update,
};

