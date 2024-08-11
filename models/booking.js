const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    place: {
        type: Schema.Types.ObjectId,
        ref: "Listing"
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    price: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);