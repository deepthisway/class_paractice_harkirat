"use strict";
function updateUser(updateprops) {
    // suppose we want the restriction to update only the age and password and nothing else=
    console.log(`Age: ${updateprops.age} , Password: ${updateprops.password}`);
}
function updateUser2(updatepropes) {
    // now no need to provide values for all the props
}
// testing fxn
updateUser({
    age: 25,
    password: '123456' // gives error if i remove one of the argument;
});
updateUser2({
    age: 25
});
const user = {
    name: 'john',
    age: 25
};
const myuser = {
    name: 'john',
    age: 25
};
const handelEvent = (event) => {
    console.log(`Handling Event: ${event}`);
};
handelEvent('click');
