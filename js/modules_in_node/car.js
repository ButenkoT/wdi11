module.exports.color = "black";
module.exports.convertible = true;
module.exports.speed = 0;

module.exports.accelerate = function(speed){
  speed += 10;
  console.log("Your speed was: " + module.exports.speed + " now your speed is: " + speed);
  return speed;
} 

module.exports.decelerate = function(speed){
  speed -= 5;
  console.log("Your speed is: " + speed);
  return speed;
}
