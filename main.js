song = "";
music = "";

function preload() {
  music = loadSound("ApDhillon-Excuses.mp3");
  song = loadSound("BoyWithUke-Toxic.mp3");
}
function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
  image(video, 0, 0, 600, 500);
}

function play() {
  song.play();
  song.setVolume(1);
  song.rate(1);
}

function pause() {
    song.pause();
  }

  function stop() {
    song.stop();
  }

  function next() {
   music.play();
    console.log("song is next");
  }

  function modelLoaded(){
    console.log('PoseNet Is Initialized');
  }
