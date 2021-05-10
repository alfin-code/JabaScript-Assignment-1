// program to find the largest among three numbers

// take input from the user
var num1,num2,num3;

 num1 = prompt("Enter first number: ");
 num2 = prompt("Enter second number: ");
 num3 = prompt("Enter third number: ");

// check the condition
if(num1 >= num2 && num1 >= num3)
 {
    document.write("The largest number is:" +num1)
}
else if (num2 >= num1 && num2 >= num3) 
{
    document.write( "The largest number is:" +num2)
 
}
else {
    document.write("The largest number is:" +num3)

}


