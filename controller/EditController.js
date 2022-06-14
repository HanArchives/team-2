// Hier komt backend code voor edit profil

const edit = async (req, res) => {
    const user = await db.collection('users').findOne({},{});
    console.log(user)
    res.render('pages/edit-profile', { user });
}

module.exports = {
    edit: edit,
};


// .post('/'); async (req, res) => {
    
//     await db.collection('users').replaceOne(
//         {
//             _id: ObjectId(req.body.update),
//         },
//         {
//             'firstname ': req.body.firstname,
//             'lastname': req.body.lastname,
//             'username': req.body.username,
//             'email': req.body.email,
//             'password': req.body.password,
//         },
//         {}
//     );

//     res.redirect('/');
// });