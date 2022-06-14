video="";
cocoSSDp="";
status=false;
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas=createCanvas(400,300);
    canvas.position(450,200);
    
}
function draw(){
    image(video,0,0,450,200);
    if(status != false){
    cocoSSDp.detect(video,gotresults);
for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="Objects detected";
    document.getElementById("number").innerHTML="Number of ojects detected:"+objects.length;
    percent=floor(100*objects[i].confidence);
    fill("blue");
    text(objects[i].label+percent+"%",objects[i].x,objects[i].y);
    textSize(10);
    stroke("green");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);  
}
}
}
function start(){

   cocoSSDp=ml5.objectDetector("cocossd",modelloaded);
 
    document.getElementById("status").innerHTML="Detecting objects";
}
function modelloaded(){
    console.log("cocoSSD is loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);

}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
    objects=results;
}