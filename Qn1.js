var n1,n2,n3

n1=prompt("Enter the first number")
n2=prompt("Enter the first number")
n3=prompt("Enter the first number")

if(n1>=n2 && n1>=n3)
{
    document.write(n1+  "is the largest number")

}

else if(n2>=n1 && n2>=n3)  
{
 document.write(n2+ "is the largest number")
}

else{
    document.write(n3+  "is the largest number")

}


