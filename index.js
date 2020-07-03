const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

//Parameter in URL
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

//PORT 
const port = process.env.PORT || 4000;

app.listen(port, () => {
    // console.log("Listening on port " + port.toString() +"...");
    console.log(`Listening on port ${port}...`)
});