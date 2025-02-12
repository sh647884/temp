const Person = require('../models/Person');
const path = require('path');
const PersonService = require('../services/person.service');
const personService = new PersonService(process.env.IMGPATH);

exports.HelloWorld = (req, res) => {
    res.status(200).json({ message: "Hello World" });
};

exports.sayHi = (req, res) => {
    const name = req.query.name || "Default Name";
    res.status(200).json({ message: `Hi ${name} !` });
};

exports.sayHiWithParam = (req, res) => {
    const name = req.params.name || "Default Name";
    res.status(200).json({ message: `Hi ${name} !` });
};

exports.createPerson = (req, res) => {
    const { name, age } = req.body;
    const person = new Person(name, age);
    res.status(201).json(person);
};

exports.getImage = (req, res) => {
    const imagePath = path.resolve(__dirname, '../images/image.jpg');
    res.sendFile(imagePath);
};

exports.getImageByFilename = (req, res) => {
    const filename = req.query.filename;
    if (!filename) {
        return res.status(400).json({ error: "Filename is required" });
    }
    const imagePath = personService.resolveFromFileName(filename);
    res.sendFile(imagePath);
};