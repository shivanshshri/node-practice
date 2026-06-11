const express = require("express");

const homepage = require("./routes/homePage");
const addHomeRouter = require("./routes/addHome");
const succesfulRouter = require("./routes/succesful");

const app = express();

app.set("view engine", "ejs");

app.use(homepage);
app.use(addHomeRouter);
app.use(succesfulRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`app is live on : http://localhost:${PORT}`);
});
