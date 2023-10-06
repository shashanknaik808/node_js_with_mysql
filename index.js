const mysql = require('mysql');
const express = require('express');


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123"
});

const app = express();

db.connect(err => {
    if (err) console.log("There is an error while connecting" + err);

    app.listen(4000);

    console.log
        ("DB Connected" + db.threadId);

    console.log
        ("Server started at port 4000");

});