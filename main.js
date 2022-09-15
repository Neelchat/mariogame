function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	coinwave = loadSound("coin.wav")
	GameOver = loadSound("gameover.wav")
	kick = loadSound("kick.wav")
	jump = loadSound("jump.wav")
	die = loadSound("mariodie.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas")
	video = createCapture(VIDEO)
	video.size(800,400)
	
	video.parent("game_console")
	posenet = ml5.poseNet(video,modelloaded)
	posenet.on('pose',gotposes)
	}
	function modelloaded(){
		console.log("model is succesfully loaded ")
	}
	function gotposes(results){
		if (results.length>0){
		console.log(results)	
		noseY = results[0].pose.nose.y
		noseX = results[0].pose.nose.x
		
	}
	}

function draw() {
	game()
}






