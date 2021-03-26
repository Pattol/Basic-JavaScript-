function setForloopValues(){
  var minimum = Number(prompt("Enter the minimum value",""));
  var maximum = Number(prompt("Enter the maximum value",""));
  var increase = Number(prompt("Enter the increase value",""));

  var i;
  for (var i=minimum; i< maximum; i+=increase) {
    document.writeln(" the new value of your number is:" + i + "<br>");
  }
}

setForloopValues();
