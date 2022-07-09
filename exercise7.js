var sum=0, n;
n=parseInt(prompt("Enter a positive integer:"));
while(n>0)
{
    sum=sum+n;
    n--;
}
alert("Sum of positive integer is:" +sum);