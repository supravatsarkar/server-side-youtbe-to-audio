
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
const axios = require("axios").default;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running Youtube To Audio Converter Server.....');
})

app.post('/getYoutubeToAudio', async (req, res) => {
    console.log('api key', process.env.RAPID_API_HOST, process.env.API_KEY);
    const videoId = req.body.videoId;
    console.log(videoId);
    const options = {
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        params: { id: videoId },
        headers: {
            'x-rapidapi-host': process.env.RAPID_API_HOST,
            'x-rapidapi-key': process.env.API_KEY
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
        res.json(error.message);
    });
})

app.listen(port, () => {
    console.log('Listening port:', port);
})
