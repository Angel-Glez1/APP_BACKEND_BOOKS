const { Router } = require('express');

const router = Router();

// Routes
const v1 = require('./api/v1');


router.use('/v1', v1);


module.exports = router;
