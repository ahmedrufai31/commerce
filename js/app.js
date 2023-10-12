const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log("Entered");

  next();
});

app.post("/signup", async (req, res) => {
    const {name, email, password} = req.body;
    console.log("signup request recieved");

    try{
        if(!name) throw Error("insert your name");
        if(!email) throw Error("insert your email");
        if(!password) throw Error("insert your password");

        // check if email already exists
        const existingUser = await db.execute(
            "SELECT * FROM USER WEHRE email = ?"
        );
        if(existingUser[0].length > 0){
            throw Error ("Email already exists");
        }
    }
catch{

}

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

