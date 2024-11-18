const express = require('express')
const cors = require("cors");
const app = express()

const dotenv = require('dotenv');
dotenv.config();
//cors otions
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));


//connect database

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
// parse requests of content-type - application/json
app.use(express.json({ limit: '100mb' }));

app.get('/', async(req, res) => {
  res.send('webhook server Run Successfully!')
})

// Webhook route
app.post("/github/webhook", async (req, res) => {
    try {
        res.status(200).send("changes in github successfully");
    } catch (error) {
        res.status(500).send(error?.message);
    }
  });
  


const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`server is running on ${PORT}`);
})
