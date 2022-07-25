var Ball, database;
var position;

function setup() {
    database = firebase.database(); 
    console.log(database);
    createCanvas(500, 500);

    Ball = createSprite (250,250,10,10);
    Ball.shapeColor = "red"; 
    var ballposition = database.ref("ball/position");
    ballposition.on("value", readPosition);
    
    
}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        changePosition(-1, 0);
    } else if (keyDown(RIGHT_ARROW)) {
        changePosition(1, 0);
    } else if (keyDown(UP_ARROW)) {
        changePosition(0, -1);
    } else if (keyDown(DOWN_ARROW)) {
        changePosition(0, +1);
    }
    drawSprites();
}



function changePosition(x, y) {
Ball.x = Ball.x + x;
Ball.y = Ball.y + y;
    
    
}

function readPosition(data){ 

position = data.val();   
console.log(position.x); 
ballposition.x = position.x; 
ballposition.y = position.y; 
}  


function showError() {
   
   
}