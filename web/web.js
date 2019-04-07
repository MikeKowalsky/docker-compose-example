const { join } = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.render("index"));
app.get("/newsletter", async (req, res) => {
  const response = await axios.post("http://mailer-servie/send-mail", {
    email: req.body.email
  });

  res.json(response.data);
});

app.listen(process.env.PORT || 80, err => {
  if (err) throw err;
  console.log("Web-server is up.");
});
