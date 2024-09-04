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
        message: 'openapi: 3.0.0
info:
  version: "1.0.0"
  title: Sorum Valz Store API
  description: >
    This API provides access to the room data for the Sorum Valz Store.
servers:
  - url: https://sorum-valz-store.vercel.app
    description: Sorum Valz Store API Server
security:
  - application:
      - read
      - write
paths:
  /api/rooms:
    get:
      summary: Get all rooms
      description: Retrieve a list of all available rooms.
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: integer
                      description: Room ID
                    name:
                      type: string
                      description: Name of the room
                    price:
                      type: number
                      format: float
                      description: Price of the room
                    available:
                      type: boolean
                      description: Availability of the room
components:
  schemas: {}
  securitySchemes:
    application:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: 'http://example.com/oauth/token'
          scopes:
            write: allows modifying resources
            read: allows reading resources'
    })
});

app.use('/api/rooms', roomRouter);
app.use('/api/lives', liveRouter);
app.use('/api/missions', missionRouter);
