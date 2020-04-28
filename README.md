# auth-api
Authentication Api boilerplate with Node.js, Express.js, Mongodb  and JWT


This project uses the following technologies:

Node and Express for a server

MongoDB for the database

# Configuration
Make sure to add your own MONGOURI from your mLab database ```config/keys.js```,

If you are running MongoDB locally add your data base name in ```config/keys.js```.

```
module.exports = {
    mongoURI: "YOUR_MONGO_URI_HERE",// OR "mongodb://localhost/YOUR_LOCAL_MONGO_DATABASE_HERE"
    secretOrKey: "secret"
  };
```

# Quick Start
```
// Install the dependencies 

npm install 

// Run the server with nodemon

nodemon server
```
