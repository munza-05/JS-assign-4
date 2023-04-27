//1: square of a number
let num=prompt("Enetr a number");
let square=num*num;
document.write(square)
//2: square root of a number
 let num2=prompt("Enetr a number");
 let sqroot=Math.sqrt(num2);
 document.write("sqroot");

//3: max and min numbers
let myarray=[45,26,100,99,101,1];
document.write(Math.max(...myarray),Math.min(...myarray));

//4:copy one array to another

let arr1 = [45,23,10,75];
let arr2 = [90,101,35,50];
let newarr = arr1.concat(arr2);
document.write(newarr);

//5: number of negative elements in array
var elements=[10,-12,89,56,-83,8,90,-8]
var neg_count=0
for(let i=0;i<elements.length;i++)
{
  if (elements[i]<0)
   neg_count++;
}
document.write(`The negative numbers in an array is: ${neg_count}`);
//6: sum of even all numbers

let sum=0;
let numb=prompt("Enter the value of numb")
for(let i=1;i<=numb;i++)
if(i%2==0)
sum=sum+i;
document.write(sum);

//7: duplicates of a value
const myArray = [4,3,6,4,1];

const myarray2={};

myArray.forEach(element => {
  myarray2[element] = (myarray2[element] || 0) + 1;
});

console.log(myarray2);