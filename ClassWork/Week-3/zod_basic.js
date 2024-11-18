const z = require('zod')

// validating an array 
const arraySchema = z.array(z.number());
const objSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8) // for a password of min length 8
})

let myObj = ({
    email: "deepanshu@gmail.com",
    password: '43534345435345'
})

let myArr = [1,2,3,4,5];

console.log(objSchema.safeParse(myObj));
console.log(arraySchema.safeParse(myArr));
