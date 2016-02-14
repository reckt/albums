import Express from 'express';
import path from 'path';

let app = new Express();
let port = process.env.NODE_ENV === 'production' ? 8085 : 8080;

app.use('/', Express.static('./public'));

app.get('/:album', (req, res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
})

app.listen( port, () => {
    console.log( 'listening on port ' + port );
});
