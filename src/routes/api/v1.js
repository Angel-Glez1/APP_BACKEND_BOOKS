const { Router } = require('express');

const router = Router();



router.use('/books', require('./v1/books'));



module.exports = router;
