const UserModel = require('../models/user.model');

exports.createUser = async (req, res) => {
    try {
        console.log(req.body); // pour debug : affiche les données reçues
        const user = await UserModel.create(req.body);
        res.status(201).json({ id: user._id });
    } catch (err) {
        console.error(err); // log les erreurs dans la console
        res.status(400).json(err);
    }
};