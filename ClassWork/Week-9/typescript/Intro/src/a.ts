// function greet(name: String)  {
//     console.log("Hello Mr.", name)

// }
// greet('Deepanshu');

// function sum(a: number, b: number) : number{
//     return a+b;
// }
// const value = sum(9,45);
// console.log(value);  

// const Deepanshu = ()=>    {
//     console.log('Hello')
// }

// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// let user:User = {
// firstName: "Deepanshu",
// lastName: "",
// age: 0
// };

// console.log(user.firstName);

// giving two types to a number and creating a new type

type rollNo = string | number;

function printRollno(rollno : rollNo){
    console.log("Roll no is: " + rollno);
}

printRollno(9);
printRollno("MXM198");


