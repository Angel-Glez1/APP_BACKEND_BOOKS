const { Router } = require('express');
const { findAllBooks } = require('../../../controllers/booksController');


const router = Router();


router.get('/', (req, res) => {

    findAllBooks()
        .then(books => res.status(200).send({ books }))
        .catch(error => res.status(500).send({ error }))
});


router.post('/', (req, res) => {

    res.status(200).send({ msg: '[POST] books' })

});


router.put('/', (req, res) => {

    res.status(200).send({ msg: '[PUT] books' })

});


router.delete('/', (req, res) => {

    res.status(200).send({ msg: '[DELETE] books' })

});



module.exports = router;

