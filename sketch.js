const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg ;
var boy;
var Snow=[];
var Snow1=[];
var snow2=[];
var Snow3=[];
var Snow4=[];







function preload(){
bg=loadImage("snow2.jpg");


}
function setup() {
  createCanvas(800,400);

 engine = Engine.create();
    world = engine.world;

    Engine.run(engine);
ground=new Ground(700,390,200,20);
groundA=new Ground(800,350,20,100);
groundB=new Ground(600,350,20,100);
ground1=new Ground(800,200,10,400);
ground2=new Ground(0,200,10,40);



}

function draw() {
 background(bg);

 Engine.update(engine);

 if(frameCount%20===0)
 { Snow.push(new snow(random(5,795),0,10))
}

if(frameCount%20===5)
 { Snow1.push(new snow(random(5,795),0,10))
}

if(frameCount%20===10)
 { Snow2.push(new snow(random(5,795),0,10))
}

if(frameCount%20===15)
 { Snow3.push(new snow(random(5,795),0,10))
}

if(frameCount%20===20)
 { Snow4.push(new snow(random(5,795),0,10))
}



 drawSprites();

for(var s=0;s<Snow.lenght;s++){
Snow[s].display();
}

for(var s=0;s<Snow1.lenght;s++){
Snow1[s].display();
  }


for(var s=0;s<Snow2.lenght;s++){
Snow2[s].display();
    }

 for(var s=0;s<Snow3.lenght;s++){
 Snow3[s].display();
}

for(var s=0;s<Snow4.lenght;s++){
Snow4[s].display();
}

ground.display();
groundA.display();
groundB.display();
ground1.display();
ground2.display();







snow.display();


}