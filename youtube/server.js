let express = require('express');
let cors = require('cors');

let app = express();
app.use(express.static('dist'));
app.use(express.static('styles'));
app.use(cors());
app.options('*', cors());
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.listen(3000, () => console.log('listening 3000'));