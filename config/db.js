const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.DB_URL;


async function main() {
    await mongoose.connect(URL);
};

main().then(() => {
    console.log('Database Connected');
}).catch(err => console.log(err));
