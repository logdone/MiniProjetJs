const url =' https://randomuser.me/api/ ';
/*var person = {
  firstName: "",
  lastName: "",
  wealth: 0
};
*/
var usersList = [];


function handleErrors (res){
    if(!res.ok){
      throw error(res.status);
    }
    console.log(res);
    return res;
  }
  
  function printError (error){
    console.log(error);
  }

function parseJSON (res){
    return res.json();
  }



  function loadData(){
    var table = document.getElementById("tableBody");
    table.innerHTML = "";
    usersList.forEach(user => {
    var tr = document.createElement("tr");
    var tdName = document.createElement("td");
    tdName.innerHTML = user.firstName + " " + user.lastName ; 
    var tdWealth = document.createElement("td");
    tdWealth.innerHTML = "$ "+user.wealth;
    tr.appendChild(tdName);
    tr.appendChild(tdWealth);
    table.appendChild(tr);
    });
}


function addRandomUser(profile){
    let person = new Object();
    person.firstName = profile.results[0].name.first;
    person.lastName = profile.results[0].name.last;
    person.wealth = Math.floor(Math.random() * 1000000);
    console.log("Person "+person.toString());
    usersList.push(person);
    console.log("List "+usersList.length);
    loadData();

}



var btnAddUser = document.getElementById("addRandomUser");
btnAddUser.addEventListener("click",function() {
fetch(url)
.then(handleErrors)
.then(parseJSON)
.then(addRandomUser)
.catch(printError)
});









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




