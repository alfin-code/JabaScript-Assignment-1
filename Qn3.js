function convert(degree) {
   var x;
    if(degree=="c")
{
    x=document.getElementById("c").value *9/5+32;
    document.getElementById("f").value = Math.round(x);
}

else
{
 x=(document.getElementById("f").value-32)*5/9;
 document.getElementById("c").value=Math.round(x);
}
}


//function temperatureConverter(valNum) {
  //  valNum = parseFloat(valNum);
    //{
    //document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
  //else
  //document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
  //}
//}