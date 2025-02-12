const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require('mongoose');
const port = 3000;
const helloRouter = require('./routes/hello');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb://127.0.0.1:27017/td')
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log(err));

app.use('/hello', helloRouter);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});

console.log(process.env.IMGPATH);