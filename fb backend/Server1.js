import mysql from 'mysql2';
import express from 'express';
import cors from 'cors';
const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lavanya1@",
    database: "mydatabase"
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
/*con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE comment5 (commid INT AUTO_INCREMENT PRIMARY KEY,comment VARCHAR(255),postid int,FOREIGN KEY (postid) REFERENCES facebook5(id)ON DELETE CASCADE)";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("comment table is created");
    });
});
/*con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE facebook7 (id INT AUTO_INCREMENT PRIMARY KEY,post VARCHAR(255),postlike int(30),date TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP)";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});*/
app.get('/api/data', (req, res) => {
    con.connect(function(err) {
        if (err) throw err;
        const sql = "SELECT id,post,postlike,date FROM facebook5 order by id desc";
        con.query(sql, (err, result) => {
            if (err) {
                console.log('failed');
                res.sendStatus(500);
                res.end();
            }
            res.json(result);
        })
    })
})
app.put('/api/data1/:id', (req, res) => {
    var rest1 = "";
    con.connect(function(err) {
        if (err) throw err;
        const index = req.params['id'];
        const data = req.body.lcount;
        let sql = `UPDATE facebook5  SET postlike = ? WHERE id = ?`;
        let values = [data, index];
        con.query(sql, values, (err, result) => {
            if (err) throw err;
            console.log("Number of records updtaed: " + result.affectedRows);
            rest1 = result.affectedRows;
            res.send({ "res2": result });
            console.log("data is", result);
        })
    })
    console.log("after sending data", req.body.lcount);
    console.log("after sending data", req.params['id']);
})
app.delete('/api/data2/:id', (req, res) => {
    var rest5 = "";
    const index2 = req.params['id'];
    con.connect(function(err) {
        if (err) throw err;
        const index2 = req.params['id'];
        let sql = "DELETE from facebook5 WHERE id =?";
        let values = [index2];
        con.query(sql, values, (err, result) => {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
            rest5 = result.affectedRows;
            res.send({ "res7": result });
        })
    })
    console.log("data delete", index2);
})
app.post('/api/post', (req, res) => {
    var rest = "";
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        const data = req.body.msg1;
        let sql = "INSERT INTO facebook5 (post,postlike) VALUES ?";
        let values = [
            [data, 0]
        ]; //this is dynamic value that you can create
        con.query(sql, [values], function(err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
            rest = result.affectedRows;
            res.send({ "res1": result });
        });
    });
    console.log("inserted data sucessfully");
});

app.post('/api/comm', (req, res) => {
    var rest3 = "";
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        const com = req.body.comment;
        const id3 = req.body.id1;
        let sql = "INSERT INTO comment5 (comment,postid) VALUES ?";
        let values = [
            [com, id3]
        ]; //this is dynamic value that you can create
        con.query(sql, [values], function(err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
            rest3 = result.affectedRows;
            res.send({ "res4": result });
        });

    });
    console.log(req.body.id1);
    console.log(req.body.comment);
});
app.get('/api/cdata', (req, res) => {
    con.connect(function(err) {
        if (err) throw err;
        const sql = "SELECT * from comment5 order by commid desc";
        con.query(sql, (err, result) => {
            if (err) {
                console.log('failed');
                res.sendStatus(500);
                res.end();
            }
            res.send(result);

        })
    })
})
app.delete('/api/cdata/:id', (req, res) => {
    var rest4 = "";
    con.connect(function(err) {
        if (err) throw err;
        const index1 = req.params['id'];
        let sql = "DELETE  from comment5 WHERE commid =?";
        let values = [index1];
        con.query(sql, values, (err, result) => {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
            rest4 = result.affectedRows;
            res.send({ "res6": result });
        })
    })
    console.log("data delete", req.params['id']);
})
app.listen(5500, () => { console.log('sever is running') });