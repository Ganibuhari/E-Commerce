const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,  
        maxLenght:[100, "Product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        default: 0.0,
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images: [
        {
            image:{
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product category"],
        enum: {
            values:[
                "Clothing",
                "Electronics",
                "Food",
                "Grocery",
                "Health",
                "Others"
            ],
            message : "Please select correct category"
        }
    },
    seller: {
        type: String,
        required: [true, "Please enter product seller"]
    },

    stock:{
        type: Number,
        required: [true, "Please enter product stock"],
        maxLenght: [100, 'Product stock cannot exceed 100']
    },

    numOfReviews:{
        type: Number,
        default: 0
    },

    reviews: [
        {
            name:{
                type: String,
                required: true
            },
            rating: {
                type: String,
                required: true
            },
            comment:{
                type: String,
                required: true
            }
        }
    ],
    CreatedAt:{
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product',productSchema)

module.exports = schema;