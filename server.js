const express = require ('express');
const mongodb = require ('./data/database');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3030;
app.use(bodyParser.json());
app.use('/', require('./routes'));




mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port, () => {console.log(`Database is listening and Node is running on port ${port}`)});
    }
});

