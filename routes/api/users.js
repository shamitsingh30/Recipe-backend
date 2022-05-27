const express = require('express');
const router = express.Router();
const passport = require('passport');

const userApi = require('../../controllers/api/user_api');

router.post('/create-session', userApi.createSession);      //passport.authenticate('jwt', {session: false})
router.post('/sign-up', userApi.signUp); 

module.exports = router;