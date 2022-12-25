require('dotenv').config();
const app = {
    port: process.env.PORT || 8000,
    db: {
        url: process.env.DB_URL
    }
};

module.exports = app;