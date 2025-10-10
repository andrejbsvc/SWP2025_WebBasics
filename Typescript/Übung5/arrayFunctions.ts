const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);

console.log(doubled); 


const numbers1 = [1, 2, 3, 4, 5, 6];
const even = numbers1.filter(n => n % 2 === 0);

console.log(even); 



const fruits = ["Banana", "Apple", "Cherry"];
fruits.sort();

console.log(fruits); 


const numbers2 = [10, 2, 30];
numbers.sort((a, b) => a - b); 
console.log(numbers2);




const ages = [18, 21, 25, 30];
const allAdults = ages.every(age => age >= 18);

console.log(allAdults); 
