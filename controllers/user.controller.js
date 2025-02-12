const UserService = require('../services/user.service');

exports.createUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json({ id: user._id });
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getUser = async (req, res) => {
    try {
        const { id_or_email } = req.params;
        const user = id_or_email.includes('@')
            ? await UserService.getUserByEmail(id_or_email)
            : await UserService.getUserById(id_or_email);
        
        if (!user) return res.status(404).json({ error: "User not found" });

        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await UserService.updateUser(req.params.id, req.body);
        if (!updatedUser) return res.status(404).json({ error: "User not found" });

        res.json(updatedUser);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await UserService.deleteUser(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: "User not found" });

        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(400).json(err);
    }
};