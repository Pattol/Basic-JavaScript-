function getNumber(){
   var choice = prompt("Enter a number between 0 and 100" + "");
   var index = 0;
   while (index < 100){
   document.writeln( "<br>The number is "+ "" + index);
   index = index+= 10;
   }
}

getNumber();
