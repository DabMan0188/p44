var target;
var bullet;
var damage = 0;

var gun;
var gunImage;

var gameState = 1;

var score = 0;


var targetGroup, bulletGroup;


function preload()
{
    gunImage = loadImage("Gun.png");
}

function setup()
{
     canvas = createCanvas(windowWidth, windowHeight );
     mouseReleased();

    targetGroup = new Group();
    bulletGroup = new Group();

    gun = createSprite(windowWidth/2, windowHeight/2, 50, 50);
    gun.addImage(gunImage)
    
}

function draw()
{
    background("black");
    
    spawnTarget();

    text("Score: "+  score, width-100, 50  );

    if(bullet.isTouching(targetGroup))
    {
        damage = damage + 1;
        score = score + 780
    }

    if(damage %6 === 0 && damage > 0)
    {
        targetGroup.destroyEach();
        //targetGroup.setLifetimeEach(0)
        spawnTarget();
    }
    //console.log(damage);

    if(frameCount %3000 === 0 && score % 10800 === 0)
    {
        gameState = gameState + 1
        target.lifetime = target.lifetime - 10
    }

    if(keyDown("w"))
    {
        gun.y = gun.y - 1
    }

    else if(keyDown("a"))
    {
        gun.x = gun.x - 1
    }
    else if(keyDown("s"))
    {
        gun.y = gun.y + 1
    }
    else if(keyDown("d"))
    {
        gun.x = gun.x + 1
    }
    if(keyDown("w") && keyDown("a"))
    {
        gun.y = gun.y -1
        gun.x = gun.x-1
    }
    else if(keyDown("a") && keyDown("s"))
    {
        gun.y = gun.y +1
        gun.x = gun.x-1
    }
    else if(keyDown("s") && keyDown("d"))
    {
        gun.y = gun.y +1
        gun.x = gun.x+1
    }
    else if(keyDown("w") && keyDown("d"))
    {
        gun.y = gun.y -1
        gun.x = gun.x+1
    }
    console.log(gameState);
    console.log(frameCount);

    
    drawSprites();
}

function spawnTarget()
{
    if (frameCount %100 === 0)
    {
        target =  createSprite(10, 10, 250, 350);
        targetGroup.add(target);
       // target.x = Math.round(random(100,width-100));
        //target.y = Math.round(random(100,2 * height/3));
        target.lifetime = 100;
        target.shapeColor = "white";  
    }
    
}

function spawnBullets(){
    bullet = createSprite(50,500, 3, 10);
    //bulletGroup.add(bullet);    
    bullet.velocityY = -10;
   // bullet.x = gun.x
   // bullet.y = gun.y
}

function mouseReleased() 
{
    spawnBullets();
}

function mouseDragged()
{

}