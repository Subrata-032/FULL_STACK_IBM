let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
arr.forEach((el,index)=>{
    console.log(el,index);
});

// let ans=arr.forEach((el,i)=>{
//     return el;
// });
// console.log(ans);

// let ans=arr.map((el,i)=>{ //returns new array
//     return el;
// })
// console.log(ans);  

//filter
// let output=arr.filter((el,i)=>{
//     return typeof el=="string" || el%2 == 0;
// });
// console.log(output);

// reduce

let output=arr.reduce((acc,el)=>{
    return acc+el;
})

console.log(output);

let output1=arr.filter((el,i)=>{
    return el%5 == 0;
}).map((el,index)=>{
    return el*2;
}).filter((el,index)=>{
    return el%10 ==0;
}).reduce((acc,el)=>{
    return acc+el;
});
console.log(output1);

let arr2=[5,2,1,35,35,2,3,1,90];
let ans=arr2.sort((a,b)=>{
    return b-a; //decending order //ascending order a-b
});
console.log(ans);


let data=[
    {
        name:"watch",
        price:2000,
        desc:"Good Watch",
        rating:4
    },
    {
        name:"Shoe",
        price:1200,
        desc:"Good shoe",
        rating:3
    },
    {
        name:"car",
        price:800000000,
        desc:"Excellent",
        rating:4
    },
    {
        name:"Laptop",
        price:4000000,
        desc:"Good",
        rating:4
    },
    {
        name:"phone",
        price:150000,
        desc:"mindblowing",
        rating:4
    },
    {
        name:"bottle",
        price:20,
        desc:"Good bottle",
        rating:4
    }
];
data.sort((a,b)=>{
    let nameA=a.name.toUpperCase();
    let nameB=b.name.toUpperCase();
    if(nameA<nameB){
        return -1;
    }
    if(nameA>nameB){
        return 1;
    }
});
console.log(data);