const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const blogRouter = require('./routes/blogRoutes');
const tagRouter = require('./routes/tagsRoutes');
require('./config/db');
const config = require('./config/config');
require('dotenv').config();
const PORT = config.port;
// initial server app
const app = express();



// built in middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// api end-points
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/./views/index.html');
})

app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/tags', tagRouter);

// custom error handler middlewares;

// -> not found route error handler
app.use((req, res, next) => {
    res.status(500).json({
        message: 'Route Not Found!!!'
    })
});

app.use((error, req, res, next) => {
    res.status(500).send(error.message);
    console.log(error);
})
// app listen on port
app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
})