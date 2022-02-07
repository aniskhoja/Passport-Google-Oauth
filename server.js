const express = require('express');
const cookieSession = require('cookie-session')
const passport = require('passport')
const auth = require('./routes/auth')
const profile = require('./routes/profile')
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose');
const keys = require('./config/keys')

const app = express();
//setup template
app.set('view engine', 'ejs')

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
    
}))
app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(keys.mongodb.db)
.then(() => console.log('connected to db'))
.catch(() => console.log("could not connect to db"))

app.use('/auth', auth)
app.use('/profile', profile)

//route to home page
app.get('/', (req, res) => { 
    res.render('index')
})


//seting up the port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("connected to server")
})