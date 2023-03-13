const express = require('express')

const app = express()

app.get('/', (req, res) => {
    videoUrl = req.query.videoFile;
    audioUrl = req.query.audioFile;
    
    output = "";
      
    if(videoUrl !== undefined) {
    output += (`<video width=\"320\" height=\"240\" id=\"videoPlayer\" controls><source src=${videoUrl}>You can't run video tag</video>`);
    }
    if(audioUrl !== undefined) {
            output += (`<audio width=\"320\" height=\"240\" id=\"audioPlayer\" controls><source src=${audioUrl}>You can't run audio tag</audio>`);
    }
      
    res.set('Content-Type', 'text/html', 'charset', 'utf-8');
    res.send(output);
})

app.listen(4080)
