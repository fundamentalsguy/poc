const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/validate', (req, res) => {
  console.log(req.body);
  var text = req.body.post;
  //console.log(text);
  const foulWords = "kill|bill|harm|drug";
 
  // text.split(" ").forEach(function(word){
    console.log(foulWords.toString());
    // console.log((text.tolowercase).match(foulWords.toString()));
    var result = text.match(foulWords.toString());
    console.log(result);
    var resText = "";
    text.split(" ").forEach(function(word){
      if (word.match(foulWords.toString())) {
          resText = resText + " " + "<div style = "+"'padding:3px;border:1px solid black'"+"/>"+word+"</div>";
        }
        else
        {
          resText = resText + " " + word;
        }
    });
  
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}+${resText}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
