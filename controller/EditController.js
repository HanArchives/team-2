// Hier komt backend code voor edit profil

const edit = async (req, res) => {
    const user = await db.collection('users').findOne({},{});
    console.log(user)
    res.render('pages/edit-profile', { user });
}

module.exports = {
    edit: edit,
};

