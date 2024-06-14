const joi = require("joi");
let mongoose = require("mongoose");

// Mongoose Product Schema
let UserSchema = mongoose.Schema({
    Username: {
        required: true,
        type: String,
        maxlength: 20,
        minlength: 3
    },
    email: {
        required: true,
        type: String,
        maxlength: 50,
        minlength: 5
    },
    Password: {
        required: true,
        type: String,
        maxlength: 50,
        minlength: 5
    },
    IsAdmin: {
        required: false,
        type: Boolean,
        default: false
    },
  
}, {
    timestamps: true
});

let UserModel = mongoose.model("UserModel", UserSchema);

// Joi Validation for creating a product
function validationRegister(obj) {
    const schema = joi.object({
        Username: joi.string().required(),
        email: joi.string().required(),
        Password: joi.string().required(), // Corrected 'catecory' to 'category'
    });
    return schema.validate(obj);
}


function validationLogin(obj) {
    const schema = joi.object({
        email: joi.string().required(),
        Password: joi.string().required(),
    });
    return schema.validate(obj);
}
function validationUpdate(obj) {
    const schema = joi.object({
        Username: joi.string(),
        Password: joi.string()
    });
    return schema.validate(obj);
}

module.exports = {
    validationRegister,
    validationLogin,
    validationUpdate,
    UserModel
};
