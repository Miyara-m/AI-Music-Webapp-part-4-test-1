var song1 = "";
var song2 = "";
var right_wristY = "";
var left_wristY = "";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(480, 480);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    posenet = ml5.poseNet(camera, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw() {
    image(camera, 0, 0, 480, 480);
    stroke("turquoise");
    fill("emerald");
    song1.isPlaying();
    "Nothing here fow now"
    if (left_wristY > 0.2)
    {

    }
}
function modelLoaded() {
    console.log("poseNet is initialized!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        right_wristY = results[0].pose.rightWrist.y;
        console.log("right_wristY = " + right_wristY);
        left_wristY = results[0].pose.leftWrist.y;
        console.log("left_wristY = " + left_wristY);
    }
}
