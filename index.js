
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
var axios = require("axios").default;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running Youtube To Audio Converter Server.....');
})

app.post('/getAudio', (res, req) => {

    const videoId = req.body;
    const options = {
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        params: { id: 'UxxajLWwzqY' },
        headers: {
            'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
            'x-rapidapi-key': '42d5636d4amsha98816696790f3fp1930e0jsn59502490e46b'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})

app.listen(port, () => {
    console.log('Listening port:', port);
})
