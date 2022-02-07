const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/login', (req, res) => {
    //google button
    res.render('login')
})

router.get('/logout', (req, res) => {
    //logout the user
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']  
}))



router.get('/google/redirect', passport.authenticate("google", { 
    successRedirect: '/profile', 
    failureRedirect: "/login" 
  }), (req, res) => {
    // res.send(req.user);
    res.redirect('/profile');
});


module.exports = router