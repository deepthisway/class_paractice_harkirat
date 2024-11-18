interface User{
    name: string;
    age: number;
    occupation: string;
    email: string;
    password: string;
}

// pick API in Typescript
// used when out of the interface, we only want to use some of its fiield as an argument to a new fxn 
// either we can make a new inteferace, but the probelm is that wont get updated once we update main interface
// use pick- can pick values from types and intefaces as well!!!!

type UpdatableProps = Pick<User, 'age' | 'password'>

function updateUser (updateprops: UpdatableProps){
    // suppose we want the restriction to update only the age and password and nothing else=
    console.log(`Age: ${updateprops.age} , Password: ${updateprops.password}`)
}

// PARTIAL API in TS
// the user might not want to update all the props provided, hence they must be optional
// apply partial API over the Pick

type UpdatablePropsOptional = Partial<UpdatableProps>;

function updateUser2 (updatepropes: UpdatablePropsOptional) 
{
    // now no need to provide values for all the props
}

// testing fxn
updateUser({
    age: 25,
    password: '123456' // gives error if i remove one of the argument;
})
updateUser2({
    age: 25
})

// when an array is declared const, we still can change its internal values,
// ts or js does not complain about it, beacause we are allowed to change internal values of the array,
// we are not changing the refrence of it
// although we cannot do a = [1,2,3] again, beacause we are changing the complete reffrence of thearra, only interalk values can be changed one by one 
// same for the objects
// we cannot do const a = "hello"  and a = "newchange"

// I dont want the internal calue change at any cost, so use 
// READONLY API of ts

type User2 = {
    readonly name: string;
    readonly age: number;
}

const user: User2 = {
    name: 'john',
    age: 25
}

// user.name = "ChangedName" // gives error becise cannot be changed

// other way
// dont declare readonly to each argument
// declare readonly to the whole object

type User3 = {
    name: string;
    age: number;
}

const myuser: Readonly<User3> = {
    name: 'john',
    age: 25
}

// myuser.age = 554;   // gives error

// Exclude: Like pick only {When you want to exclude certain events}

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'> ; // scroll cant be used now 

const handelEvent = (event: ExcludeEvent) =>    {
    console.log(`Handling Event: ${event}`);
}

handelEvent('click');
// handelEvent('scroll');




