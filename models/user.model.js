const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: {
        type: String,
        validate: {
            validator: function (value) {
                return value.length >= 2 && value.length <= 40;
            },
            message: 'Last name must be between 2 and 40 characters long'
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (email) {
                let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return re.test(email);
            },
            message: 'Please fill a valid email address'
        }
    },
    password: String
});

// Hook avant sauvegarde (formatage des noms)
userSchema.pre('save', function (next) {
    console.log('Fonction exec avant le save');
    console.log(this);

    if (this.firstName) {
        this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1).toLowerCase();
    }
    if (this.lastName) {
        this.lastName = this.lastName.toUpperCase();
    }

    next();
});

// Hook avant mise à jour (formatage des noms)
userSchema.pre('findOneAndUpdate', function (next) {
    let update = this.getUpdate();
    
    if (update.firstName) {
        update.firstName = update.firstName.charAt(0).toUpperCase() + update.firstName.slice(1).toLowerCase();
    }
    if (update.lastName) {
        update.lastName = update.lastName.toUpperCase();
    }

    this.setUpdate(update);
    next();
});

const UserModel = mongoose.model('Users', userSchema);
module.exports = UserModel;