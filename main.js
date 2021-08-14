status= "";
video= "";

function preload()
{
    video = createVideo("video.mp4");
    video.hide();
}

function setup()
{
    canvas = createCanvas(600, 400);
    canvas.center();
}

function start()
{
    object_detected = ml5.objectDetector("cocossd", modelLoaded);

    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    video.loop();
    status = true;
    video.speed(1);
    video.volume(0);
}

function draw()
{
    image(video, 0, 0, 600, 400);
}