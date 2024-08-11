const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/WANDERLUST";

main().then((res) => {
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({
        ...obj,
        owner:"66a1edf30460614a7c03849a",
    }));
    await Listing.insertMany(initdata.data);
    console.log("data was saved");
};

initDB();