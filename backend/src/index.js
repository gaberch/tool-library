const app = require('./app');

const port = process.env.PORT || 3000;      //Added env variables in case there's time to deploy to Heroku

app.listen(port, () => {
    console.log("Backend Server running on port: " + port);
})