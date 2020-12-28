/*var person = {
  firstName: "",
  lastName: "",
  age: 0,
  wealth: 0
};
*/

var usersList = [];
function addUser(){
    let person = new Object();
    person.firstName = document.getElementById("firstName");
    person.lastName = document.getElementById("lastName");
    person.wealth = document.getElementById("wealth");
    person.age = document.getElementById("age");
    usersList.push(person);
}

function showOnlyMillionaires(){
    return usersList.filter(user => {
        user.wealth>=1000000
    });

function doubleMoney(){
    usersList.forEach(user => {
        user.wealth = user.wealth*2;
    });
}


function sortByrichest(){
   usersList.sort((a, b) => (a.wealth > b.wealth) ? 1 : -1);
}



}