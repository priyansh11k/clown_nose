nosex = "";
nosey = "";

function preload(){
img = loadImage("https://i.postimg.cc/Cx7FKCcJ/nose-removebg-preview.png");
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPose);
}

function snap(){
save("filter_clownnose.png");
}

function draw(){
    image(video,0,0,300,300);
    image(img,nosex,nosey,40,40) ;
}

function modelLoaded(){
console.log('PoseNet is Ready');
}

function gotPose(results){

if (results.length > 0) {
 console.log(results);  
 nosex = results[0].pose.nose.x-20;
 nosey = results[0].pose.nose.y-15 ; 
 console.log("nose x = " + nosex);
 console.log("nose y =" + nosey);

}
}



