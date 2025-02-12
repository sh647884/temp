/*const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.createUser);
router.get('/:id_or_email', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

userSchema.pre('save', function(next) {
    console.log('Fonction exec avant le save');
    console.log(this);
    next();
});

userSchema.pre('save', function(next) {
    this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1).toLowerCase();
    this.lastName = this.lastName.toUpperCase();
    next();
});

module.exports = router;*/