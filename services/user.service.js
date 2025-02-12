const UserModel = require('../models/user.model');

class UserService {
    async getUserById(id) {
        return await UserModel.findById(id);
    }

    async getUserByEmail(email) {
        return await UserModel.findOne({ email });
    }

    async updateUser(id, userData) {
        return await UserModel.findByIdAndUpdate(id, userData, { new: true });
    }

    async deleteUser(id) {
        return await UserModel.findByIdAndDelete(id);
    }

    async createUser(userData) {
        return await UserModel.create(userData);
    }
}

module.exports = new UserService();