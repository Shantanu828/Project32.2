const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var displayHour;
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg( );
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if (backgroundImg)
background(backgroundImg);

    Engine.update(engine);
    textSize(25);
    text("Hour :"+displayHour,100,100);
    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//console.log(response);
    //change the data in JSON format
    var responseJson = await response.json();
    var dateTime = responseJson.datetime;
    // write code slice the datetime
    var hour = dateTime.slice(11,13);
    displayHour = hour;
    


    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=5){
        bg = "sunrise1.png";
    }else    if(hour>=05 && hour<=6){
        bg = "sunrise2.png";
    }else    if(hour>=07 && hour<=8){
        bg = "sunrise3.png";
    }else    if(hour>=08 && hour<=10){
        bg = "sunrise4.png";
    }else    if(hour>=10 && hour<=12){
        bg = "sunrise5.png";
    }else    if(hour>=12 && hour<=13){
        bg = "sunrise6.png";
    }else    if(hour>=13 && hour<=15){
        bg = "sunset7.png";
    }else    if(hour>=15 && hour<=16){
        bg = "sunset8.png";
    }else    if(hour>=16 && hour<=17){
        bg = "sunset9.png";
    }else    if(hour>=17 && hour<=18){
        bg = "sunset10.png";
    }else    if(hour>=18 && hour<=19){
        bg = "sunset11.png";
    }else{   
        bg = "sunset12.png";   }

    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg);
}
