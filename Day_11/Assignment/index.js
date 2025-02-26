const student={
    name: "Subrata Bera",
    roll_number:101,
    marks:{
        Math:80,
        Science:65,
        English:50,
        History :70
    },
    getAverageMarks: function(){
        const subjectMarks = Object.values(this.marks);
        const totalMarks = subjectMarks.reduce((sum, mark) => sum + mark, 0);
        const average = totalMarks / subjectMarks.length;
        return average;
    },

    checkPassOrFail: function(){
        const average = this.getAverageMarks();
        if (average > 40) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
};

console.log(student.getAverageMarks());

console.log(student.checkPassOrFail());

const library = {
    books:{
        "Atomic Habits": { author: "James Clear", availableCopies: 3 },
        "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
    },
    borrowBook: function(bookName) {
        if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
          this.books[bookName].availableCopies -= 1; // Decrease available copies by 1
          console.log(`You have successfully borrowed "${bookName}".`);
        } else if (this.books[bookName] && this.books[bookName].availableCopies === 0) {
          console.log(`Sorry, "${bookName}" is currently unavailable.`);
        } else {
          console.log(`The book "${bookName}" does not exist in the library.`);
        }
    },
    
      // Method to return a book
      returnBook: function(bookName) {
        if (this.books[bookName]) {
          this.books[bookName].availableCopies += 1; // Increase available copies by 1
          console.log(`You have successfully returned "${bookName}".`);
        } else {
          console.log(`The book "${bookName}" does not exist in the library.`);
        }
    }
};

library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies); 

library.returnBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies); 

// Problem 03 Generate multiplication table

function generateTable(num,limit){
    for (let i = 1; i <= limit; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
generateTable(5,10);

//problem 04 print number
function fizzBuzz(n){
    for(let i=1; i<=n;i++){
        if((i%3===0)&&(i%5===0)){
            console.log("FizzBuzz");
            
        }
        else if(i%3===0){
            console.log("fizz");
            
        }
        else if(i%5===0){
            console.log("Buzz");
            
        }
        
        else{
            console.log(i);
        }
    }
}
fizzBuzz(50);
//problem 5

function reverseString(str){
    let newString="";
    for(let i=str.length-1;i>=0;i--){
        newString += str[i];
    }
    return newString;
}
console.log(reverseString("Subrata"));

// problem 06 remove duplicates in array
// function removeDuplicates(arr){
//     let uniqueArr=[];
//     uniqueArr.push(arr[0]);
//     let num=arr[0];
//     for(let i=0;i<arr.length-1;i++){
        
//         if(num!=arr[i+1]){
//             uniqueArr.push(arr[i+1]);
//         }
//     }
//     return uniqueArr;
// }
// console.log(removeDuplicates([1,3,2,4,5,6,2,3,4,5,67,87,6,2,1]));
function removeDuplicates(arr) {
    let uniqueArray = [];  
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray; 
  }
  console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));

// problem 07 find the longest word in a sentence
function longestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
    let longest = "";
    for (let i = 0; i < words.length; i++) {
      // If the current word is longer than the previous longest word, update the longest word
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
}
console.log(longestWord("Coding is amazing and challenging"));
// Problem 8: Custom Array Method (Creating Your Own .map())
let arr2=[1,2,3,4,5,6,7,8];
const callBack=(n)=>{
    return n*2;
}
function myMap(arr2,callBack){

     for(let i=0;i<arr2.length;i++){
        arr2[i]=callBack(arr2[i]);
     }
     return arr2;
}
console.log(myMap(arr2,callBack));//[2, 4, 6, 8, 10, 12, 14, 16]


//Problem 9: Find the First Non-Repeating Character in a String
let str2="aabbcddce";
function firstUniqueCharacter(str2){


     let count={};
    //counting the occurance of each letter in an object
    for(let i=0;i<str2.length;i++){
       if(!count[`${str2[i]}`]){
          count[`${str2[i]}`]=1;
        }else{
            count[`${str2[i]}`]+=1;
        }
   }
   for(let char of str2){
    if(count[char]==1){
        return char;
    }
   }
   return null;

}
console.log(firstUniqueCharacter(str2));//e



//Problem 10: Nested Loop Challenge – Find Pairs that Sum to a Target
function findPair(arr,target){
    let result=[];
    let store=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                result.push(arr[i]);
                result.push(arr[j]);
                store.push(result);
                result=[];
            }
        }
    }
    return store;

}
console.log(findPair([2, 4, 3, 5, 7, 8, 9],10));//[ [ 2, 8 ], [ 3, 7 ], [ 5, 5 ] ]


//Problem 11: Implement a Stack in JavaScript
class Stack{
    constructor(){
        this.items=[];
    }
    //push operation
    push(value){
        this.items.push(value);
    }
    //pop operation
    pop(){
        if(this.items.length===0){
            console.log("Stack is empty");
        }
        return this.items.pop();
    }
    peek(){
        if(this.items.length===0){
            console.log("Stack is empty");
        }
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
}
let myStack=new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop()); // 20
console.log(myStack.peek()); // 10
console.log(myStack.isEmpty()); // false


//Question: - String Manipulation Challenge




//Question: - Find Most Frequent Element in an Array
let arr4=[1, 3, 2, 3, 4, 1, 3, 2, 3, 5];

function frequency(arr4){
    let count={};
    for(let el of arr4){
        if(! count[`${el}`]){
            count[`${el}`]=1;
        }else{
            count[`${el}`]+=1;
        }
    }
    let most=0;
    let char;
    for( el in count){
        if(count[el]>most){
            most=count[el];
            char=el;
        }
    }
    return char;
}
console.log(frequency(arr4));//3