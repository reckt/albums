import Express from 'express';

let app = new Express();
let port = process.env.NODE_ENV === 'production' ? 8085 : 8080;

app.get('/', Express.static('public'));

app.listen( port, () => {
    console.log( 'listening on port ${port}' );
});
