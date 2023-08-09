status1 = "";

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
}

function draw() {
    image(video, 0, 0, 350, 350)
}

function start_d() {
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Object detection started";
    object= document.getElementById("searc").value;
}

function modelLoaded() {
    console.log("model loaded");
    status1 = true;
}