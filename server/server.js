const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const Pool = pg.Pool;

const app = express();
const PORT = 5000;

const pool = new Pool({
    database: 'jazzy_sql',
    host: 'localhost',
    port: 5432
});

pool.on('connect', () => {
    console.log('connected to postgres');
});

pool.on('error', (error) => {
    console.log(error);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

// TODO - Replace static content with a database tables
// const artistList = [ 
//     {
//         name: 'Ella Fitzgerald',
//         birthdate: '04-25-1917'
//     },
//     {
//         name: 'Dave Brubeck',
//         birthdate: '12-06-1920'
//     },       
//     {
//         name: 'Miles Davis',
//         birthdate: '05-26-1926'
//     },
//     {
//         name: 'Esperanza Spalding',
//         birthdate: '10-18-1984'
//     },
// ]
// const songList = [
//     {
//         title: 'Take Five',
//         length: '5:24',
//         released: '1959-09-29'
//     },
//     {
//         title: 'So What',
//         length: '9:22',
//         released: '1959-08-17'
//     },
//     {
//         title: 'Black Gold',
//         length: '5:17',
//         released: '2012-02-01'
//     }
// ];

app.get('/artist', (req, res) => {

    const queryText = `SELECT * FROM "artist" ORDER BY "birthdate" DESC;`
    pool.query(queryText)
    .then((result) => {
        console.log(result.rows);
        res.send(result.rows);  
    }) // end .then pool query
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    }); // end .catch pool query
}); // end app.get /artist

app.post('/artist', (req, res) => {

    console.log('req.body', req.body);
    
    let queryText = `INSERT INTO "artist" ("name", "birthdate")
    VALUES ($1, $2);`

    let values = [req.body.name, req.body.birthdate];

    pool.query(queryText, values)
    .then ( (result) => {
        res.sendStatus(201);
    }) // end .then
    .catch( err => {
        res.sendStatus(500);
        console.log(err);     
    }) // end .catch
}); // end app.post /artist

app.get('/song', (req, res) => {
    
    const queryText = `SELECT * FROM "song" ORDER BY "title" DESC;`
    pool.query(queryText)
    .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    })// end .then
    .catch((err) => {
        console.log(err);
        sendStatus(500);
    }) // end .err
}); // end app.get /song

app.post('/song', (req, res) => {
    
    console.log('req.body', req.body);

    let queryText = `INSERT INTO "song" ("title", "length", "released")
    VALUES ($1, $2, $3);`

    let values = [req.body.title, req.body.length, req.body.released];

    pool.query(queryText, values)
    .then ( (result) => {
        res.sendStatus(201);
    }) // end .then
    .catch( err => {
        res.sendStatus(500);
    }) // end .catch
}); // end app.post /song


