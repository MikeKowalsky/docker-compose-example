const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-mail", (req, res) => {
  //send email logic
  res.json({ message: `E-mail has been send to ${req.body.email}` });
});

app.listen(process.env.PORT || 80, err => {
  if (err) throw err;
  console.log("Mailer-server is up.");
});
