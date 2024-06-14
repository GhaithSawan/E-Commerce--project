const joi = require("joi");
let mongoose = require("mongoose");

// Mongoose Product Schema
let ProductSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
        maxlength:50,
        minlength: 5
    },
    desc: {
        required: true,
        type: String,
        maxlength: 100,
        minlength: 5
    },
    category: {
        required: true,
        type: String,
    },
    old_price: {
        type: Number,
    },
    new_price: {
        required: true,
        type: Number,
    },
    BasicImage: {
        type: Object,
        default: {
            URL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
            PublicId: null,
        }
    },

});

let ProductModel = mongoose.model("ProductModel", ProductSchema);

// Joi Validation for creating a product
function validationcreateProduct(obj) {
    const schema = joi.object({
        title: joi.string().required(),
        desc: joi.string().required(),
        category: joi.string().required(), // Corrected 'catecory' to 'category'
        new_price: joi.number().required(), // Corrected 'newPrice' to 'new_price', 'Number' to 'number' and removed '.trim()'
    });
    console.log("schema -validationcreateProduct", schema.validate(obj));
    return schema.validate(obj);
}

// Joi Validation for updating a product
function validationPutProduct(obj) {
    const schema = joi.object({
        title: joi.string(),
        desc: joi.string(),
        category: joi.string(),
        new_price: joi.number()
    });
    return schema.validate(obj);
}

module.exports = {
    validationPutProduct,
    validationcreateProduct,
    ProductModel
};
