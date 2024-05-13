const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const route = require("./route");

const PORT = 5500;
const HOSTNAME = "localhost";

const corsOptions= {
    origin: 'http://localhost:3000',
    credentials: true,
    openSuccessStatus: 200
}

// Request Management
const app = express();
app.use(express.json());        // A body Parser Required to post a data

app.use(cors());
app.use('/', route);

// DB
const MongoAtlas = "mongodb+srv://KOKO:WOPtUVeG3v7bPtXv@zomato-clone-80.iw1me1l.mongodb.net/mini_project_3?retryWrites=true&w=majority&appName=zomato-clone-80";

//password : WOPtUVeG3v7bPtXv

mongoose.connect(MongoAtlas, {
     useNewUrlParser: true,
     useUnifiedTopology: true
})
    .then(res => {
        app.listen(PORT, HOSTNAME, () => {
            console.log(`Server is running at ${HOSTNAME}: ${PORT}`)
        });
    })
    .catch(err => console.log(err));