const express = require('express');

const app = express();

//Returns a middleware - Body Parsing
app.use(express.json());

const courses = [
    {
        id: 1, name: 'Course1'
    },
    {
        id: 2, name: 'Course2'
    },
    {
        id: 3, name: 'Course3'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

//Parameter & Queries in URL
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course){
        return res.status(404).send('The course was not found');
    }
    return res.send(course);

});

// //Create a new course
app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    console.log(course);
    courses.push(course);
    res.send(course); 
});


// app.get('/api/posts/:year/:month', (req, res) => {
//     //res.send(req.params);
//     res.send(req.query);
// });

//PORT 
const port = process.env.PORT || 3030;

app.listen(port, () => {
    // console.log("Listening on port " + port.toString() +"...");
    console.log(`Listening on port ${port}...`)
});