const {dbConnection} = require('./config/db.js');
const express = require('express');
const app = express();
const port = 5000;


app.use(express.json())


app.use('/api/user',require('./routes/userRoutes.js'));
app.use('/api/post',require('./routes/postRoutes.js'))

app.listen(port, () => {
    dbConnection();
    console.log(`Server is running on ${port} number.`)
})