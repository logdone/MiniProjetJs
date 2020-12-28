var faker = require('faker');
/*var person = {
  firstName: "",
  lastName: "",
  wealth: 0
};
*/
var usersList = [];
function addRandomUser(){
    let person = new Object();
    person.firstName = faker.name.firstName;
    person.lastName = faker.name.lastName;
    person.wealth = Math.floor(Math.random() * 1000000);
    usersList.push(person);
}


function addUser(){
    let person = new Object();
    person.firstName = document.getElementById("firstName");
    person.lastName = document.getElementById("lastName");
    person.wealth = document.getElementById("wealth");
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


function sortByrichest(desc){
   usersList.sort((a, b) => ((a.wealth > b.wealth) && desc) ? 1 : -1);
}

function calculateEntierWealth(){
  return  usersList.reduce((a, b) => a + b, 0);
}

}