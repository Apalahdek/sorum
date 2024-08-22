const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const roomRouter = require('./routes/roomRoute');
const liveRouter = require('./routes/liveRoute');
const missionRouter = require('./routes/missionRoute');

const app = express();
const PORT = 8000;

app.use(cors())
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server Running on port http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send({
        message: 'Welcome To JKT48 SHOWROOM API',
        author: 'Valzyy',
        tujuan: 'Buat Bot Wangsaf atau lainnya'
    })
});

app.use('/api/rooms', roomRouter);
app.use('/api/lives', liveRouter);
app.use('/api/missions', missionRouter);
