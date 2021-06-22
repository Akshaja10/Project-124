function preload()
{

}

function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(600, 500);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log('POseNet Is Initialized!');
}

function draw() 
{
    background('#FFB6C1');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}