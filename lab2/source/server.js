const express = require('express')



const app = express()



app.get('/', (req, res) => {
    const videoUrl = req.query.videoFile;
	const audioUrl = req.query.audioFile;
	const imgUrl = req.query.imgFile;

	output = "";

	if(videoUrl === undefined) {
		output += `<h1>Hello World Player</h1>`;
    }
	
	if(imgUrl !== undefined) {
		output += `<img width=\"200\" height=\"200\" id=\"posterImage\" src=${imgUrl} alt="img"></img><br>`;
    }

	if(videoUrl !== undefined) {
		output += (`<video width=\"320\" height=\"240\" id=\"videoPlayer\" controls><source src=${videoUrl}>You can't run video tag</video>`);
		output += `<button id="videoCancel" onclick="changeVideoSource()">videoCancel</button><br>`;
		output += `
			 <script>
				function changeVideoSource() {
					let element = document.getElementById("videoPlayer");
					element.src = "cancel.mp4";
				}
			 </script>
		`;
	}
    

    if(audioUrl !== undefined) {
		output += (`<audio width=\"320\" height=\"240\" id=\"audioPlayer\" controls><source src=${audioUrl}>You can't run audio tag</audio>`);
		output += `<button id="audioCancel" onclick="changeAudioSource()">audioCancel</button>`;
		output += `
			<script>
				function changeAudioSource () {
					let element = document.getElementById("audioPlayer");
					element.src = "cancel.mp3";
				}
			</script>
		`;
	}

    res.set('Content-Type', 'text/html', 'charset', 'utf-8');
	res.send(output);
})



app.listen(4080)