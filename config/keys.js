//add this file to .gitignore

module.exports = {
    google: {
        clientID : process.env.CLIENT_ID,
        clientSecret : process.env.GOOGLE_SECRET
    },
    mongodb : {
        db: process.env.db
    },
    session:{
        cookieKey: process.env.KEY || "HELLOWORLD"
    }
}