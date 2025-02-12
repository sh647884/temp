/*const userModel = require('../models/user.model');

exports.createUser = (req, res) => {
    userModel.create(req.body)
        .then(result => res.status(201).send({ id: result._id }))
        .catch(err => res.status(400).send(err));
};

exports.createUserAsync = async (req, res) => {
    try {
        let user = await userModel.create(req.body);
        res.status(201).send({ id: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
};*/