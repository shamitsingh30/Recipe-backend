const express = require('express');
const router = express.Router();
const passport = require('passport');

const homeApi = require('../../controllers/api/home_api');

router.get('/', passport.authenticate('jwt', {session: false}), homeApi.home);      //passport.authenticate('jwt', {session: false})
router.get('/get-recipe-info/:id', passport.authenticate('jwt', {session: false}), homeApi.recipeInfo);
router.use('/users', require('./users'))

module.exports = router;