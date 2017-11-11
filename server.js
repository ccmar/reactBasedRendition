
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact", {
  useMongoClient: true
});


const Schema = mongoose.Schema
  const ArticlesSchema = new Schema({
    title: String,
    date: { type: Date, default: Date.now},
    url: String
  });
const article = mongoose.model("Article", ArticlesSchema);
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

app.get("/api/saved", (req, res) => {
  Article.find ({}).then (function (err, articles){
    if (err) console.log(err)
    res.json(articles)
  });
});
app.post("/api/saved", (req, res) => {
  Article.create(req.body.then (function(err, article){
    if (err) console.log(err);
    res.json(article);
  }))
});
app.delete("/api/saved", (req, res) => {
  Article.create(req.body.then (function(err, article){
    if (err) console.log(err);
    res.send('DELETE request to homepage');
}))
});
app.listen(3003, () => console.log('Example app'))
