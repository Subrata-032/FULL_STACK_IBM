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