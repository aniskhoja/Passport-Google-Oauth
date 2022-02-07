const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys')
const User = require('../module/user')

passport.serializeUser((user, done) => { done(null,  user.id) })
passport.deserializeUser((id, done) => { User.findById(id).then((user) => {
    done(null, user)}) 
})


passport.use(new GoogleStrategy({
    //option for google start
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "/auth/google/redirect"

}, async (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then((currentUser) => {
        if(currentUser){
            //already have user
            console.log("customer already exist")
            done(null, currentUser)
        }else {
            //add new user into db
            new User({
               displayName: profile.displayName,
               googleId: profile.id
           }).save().then((newuser) => {
               console.log("data updated")
               done(null, newuser)
           })
        }
    })     
}))