// input a number
let num = 153;
let digit = 0;
 numSum = num;
while(numSum > 0){
  digit += numSum%10;
  numSum = Math.floor(numSum/10);
}
;
console.log(`number: ${num}`);
console.log(`Sum of its digits: ${digit}`);

// find aramstrong number or not
let isAramStrong = "No";
temNum = num;
let aramsStrong = 0;
while(temNum>0){
  let digit = temNum %10;
  aramsStrong += Math.pow(digit,3);
  temNum = Math.floor(temNum/10);

}

if(aramsStrong === num){
  isAramStrong = "yes";
}
console.log(`Is it an Armstrong number? ${isAramStrong}`);

// get prime number
let prime = "Yes";
if(num<=1){
  prime = "No";
}
for(let i = 2; i<= Math.sqrt(num); i++){
  if(num% i==0){
    prime = "No";
    break;
  }
}

console.log(`Is it a prime number? ${prime}`);

// get factor 
let factor = [];
for(let i = 1; i <= num; i++){
  if(num%i==0){
    factor.push(i)
  }
}
console.log(`Factors : ${factor}`);


