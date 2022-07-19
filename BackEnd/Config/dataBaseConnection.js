const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/BazaarShop")
.then(() => {
    console.log("DB connected successfully");
}).catch(error => {
    console.log("DB connection error " + error);
})