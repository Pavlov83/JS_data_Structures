 const weather =[70,34,56,27,89,99,101];
 const weekdays=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

//  //if we know the array size we are accessing directly by index[] insteda push and pop

//  console.log('The monday temp was ', weather[0]);

// //We can iterate over the array and assign values

// for(let i = 0; i < weekdays.length;i++){

//    console.log(`On ${weekdays[i]} the temperature was ${weather[i]}`) 

// }

//if we want to find the average temperature we need to add all the
//items and divide the result by the count of the elements

// let totalTemp = 0;
// let averageTemp = 0;

// for(let i = 0;i < weather.length;i++){

//     totalTemp+=weather[i]

// }

// averageTemp = totalTemp / 7;

// return console.log('Average temp is',averageTemp);


// find smallest and highest value in an array


let smallest = weather[0];
let largest = weather[0];

for(let i = 0;i < weather.length; i++){
    let temp = weather[i];
    if (temp < smallest){
        smallest = temp;
    }else if(temp>largest){
        largest = temp;
    }
}

console.log(`Largest is ${largest}`,`Smallest is ${smallest}`)
