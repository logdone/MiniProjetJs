const url = ' https://randomuser.me/api/ ';
/*var person = {
  firstName: "",
  lastName: "",
  wealth: 0
};
*/
var usersList = [];


function handleErrors(res) {
    if (!res.ok) {
        throw error(res.status);
    }
    console.log(res);
    return res;
}

function printError(error) {
    console.log(error);
}

function parseJSON(res) {
    return res.json();
}



function loadData(personsList) {
    hideEntierWealth();
    var table = document.getElementById("tableBody");
    table.innerHTML = "";
    personsList.forEach(user => {
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
        tdName.innerHTML = user.firstName + " " + user.lastName;
        var tdWealth = document.createElement("td");
        tdWealth.innerHTML = "$ " + user.wealth;
        tr.appendChild(tdName);
        tr.appendChild(tdWealth);
        table.appendChild(tr);
    });
}


function addRandomUser(profile) {
    hideEntierWealth();
    let person = new Object();
    person.firstName = profile.results[0].name.first;
    person.lastName = profile.results[0].name.last;
    person.wealth = Math.floor(Math.random() * 1000000);
    console.log("Person " + person.toString());
    usersList.push(person);
    console.log("List " + usersList.length);
    loadData(usersList);

}


var btnAddUser = document.getElementById("addUser");
var btnDoubleMoney = document.getElementById("doubleMoney");
var btnCalculateEntireWealth = document.getElementById("calculateEntireWealth");
var btnSortByRichest = document.getElementById("sortByRichest");
var btnShowOnlyMillionaires = document.getElementById("showOnlyMillionaires");
var btnaddRandomUser = document.getElementById("addRandomUser");

btnaddRandomUser.addEventListener("click", function () {
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(addRandomUser)
        .catch(printError)
});


btnAddUser.addEventListener('click', addUser);
btnDoubleMoney.addEventListener('click', doubleMoney);
btnSortByRichest.addEventListener('click', sortByrichest);
btnCalculateEntireWealth.addEventListener('click', calculateEntierWealth);
btnShowOnlyMillionaires.addEventListener('click', showOnlyMillionaires);






function addUser() {
    hideEntierWealth();

    let person = new Object();
    person.firstName = document.getElementById("firstName").value;
    person.lastName = document.getElementById("lastName").value;
    person.wealth = document.getElementById("wealth").value;
    usersList.push(person);
    console.log("in add user");
    loadData(usersList);
}

function showOnlyMillionaires() {
    hideEntierWealth();

    hideEntierWealth();
    var list = usersList.filter(user => {
       return user.wealth >= 1000000
    });
    console.log("Mill nbr "+list.length);
    loadData(list);
}


function doubleMoney() {
    hideEntierWealth();
    usersList.forEach(user => {
        user.wealth = user.wealth * 2;
    });
    loadData(usersList);
}


function sortByrichest() {
    hideEntierWealth();
    let desc = 1;
    let sortIcon = document.getElementById('sortIcon');
    if (sortIcon.classList.contains('fa-sort-amount-desc')) {
        sortIcon.classList.remove('fa-sort-amount-desc');
        sortIcon.classList.add('fa-sort-amount-asc');
         desc = 1;
        console.log("in if ");

    } else {
        sortIcon.classList.remove('fa-sort-amount-asc');
        sortIcon.classList.add('fa-sort-amount-desc');
         desc = -1;
        console.log("in else ");

    }
    console.log("Sort desc "+desc);
    usersList.sort((a, b) => ((a.wealth > b.wealth)) ? 1*desc : -1*desc);
    loadData(usersList);
}

function calculateEntierWealth() {
    var totalWealth = document.getElementById("totalWealth");
    var x = document.getElementById("tableFooter");

    totalWealth.innerHTML = "$" + usersList.reduce((a, b) => a + b.wealth, 0);
    x.style.display = "block";

}

function hideEntierWealth(){
    var x = document.getElementById("tableFooter");
    x.style.display = "none";
}
