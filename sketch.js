var car,wall; 
var speed,weight;

 function setup() { 
      createCanvas(1600,400);

      car=createSprite(50,200,50,50); 
      wall=createSprite(1300,200,60,height/2); 
      wall.shapeColor=color(80,80,80);
      

      speed=random(55,90); 
      weight=random(400,1500);

      car.velocityX=speed;
   } 

   function draw() { 
     background(0);

     text("x:"+mouseX,50,75);
     text("y:"+mouseY,50,100);

     fill("pink"); 
     textSize(19);
     text("Deformation:"+Math.round((0.5*speed*weight*speed)/22500),1150,350);

     if(car.x>1248){
        car.x=1248;
     }
      
     deformation();

  fill("red");
  textSize(19); 
  text("Deformation- 180 Is Considered Lethal For Passengers",358,279);
  fill("yellow"); 
  textSize(19); 
  text("Deformation Between 80 To 180 Is Considered Average For Passengers", 350, 310);
  fill("green");
  textSize(19);
  text("Deformation < 80 Is Considered Good For Passengers", 350, 350);
  fill("purple");
  textSize(30);
  text("Global Car Safety", 825,50);
  fill("purple"); 
  textSize(30);
  text("Organisation, 860,85");

drawSprites();
 
      
      }

    function deformation(){
      if(wall.x - car.x < (car.width + wall.width)/2){
        car.velocityX=0;
        var deformation=(0.5 * weight * speed * speed)/22500;
        console.log(deformation);
         
       if(deformation > 180){ 
         car.shapeColor=color(255,0,0); 
       } 
       if(deformation<180 && deformation > 100){ 
         car.shapeColor=color(230,230,0);
       } 
       if(deformation<100){ 
         car.shapeColor=color(0,225,0); 
         } 
     }
    }
