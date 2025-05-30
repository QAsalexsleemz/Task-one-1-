let side1 = "4cm"
let side2 = "4cm"
let side3 = "4cm"
 
    
if(side1 === side2 && side3){
    console.log("It is an equilateral triangle")
}
else if(side1 === side2 || side1 === side3 || side2 === side3){
    console.log("It is an isosceles triangle")
}
else{
    console.log("It is a scalene triangle")
}



