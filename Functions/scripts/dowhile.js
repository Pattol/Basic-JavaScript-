function guessNumber(){
  var guess = prompt("guess a number between 1 and 10","");
  var guess = 5;

  do {
    var guess = prompt("guess a number between 1 and 10","");

  } while (guess != secret);

  document.writeln("Congratulations!....."); //pay attention to the double quotes
}

guessNumber();
