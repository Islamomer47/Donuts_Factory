// let Name;
// let gender;
// Name = prompt("please enter your first name : ");
// gender = prompt("please enter your gender -male or female- :");
// getgender(gender);
// function getgender(gender) {
//   while (gender !== "female" && gender !== "male") {
//     gender = prompt("Please enter your gender:");
//   }
//   return gender;
// }
// alert("welcome " + Name);

// let order, ordername;
// order = prompt(
//   "What would you like to order? (Donut, Coffee, Ice cream, Bakery):"
// );
// ordername = prompt("Please enter the flavor of the " + order);

// alert(
//   "Your order for  " +
//     order +
//     " with " +
//     ordername +
//     " flavor is getting prepared!"
// );
// console.log(Name + "ordered" + ordername + order);

// let answers = [];
// answers.push(Name);
// answers.push(gender);
// answers.push(order);
// answers.push(ordername);
// var sec = document.createElement("section");

// var newDiv = document.createElement("div");
// var prag = document.createElement("p");
// var o_l = document.createElement("ol");
// newDiv.id = "div-js";
// document.getElementById("list").appendChild(sec);
// sec.appendChild(newDiv);
// newDiv.appendChild(prag);
// prag.appendChild(o_l);

// for (var i = 0; i < answers.length; i++) {
//   var li = document.createElement("li");

//   o_l.appendChild(li);
//   li.innerHTML = li.innerHTML + answers[i];
// }

function submitted(event) {
  event.preventDefault();
  let userInformation = document.getElementById("userinput");
  let form = event.target;
  let username = form.username.value;
  let gender = form.gender.value;
  let age = form.age.value;
  let ordertype = form.order.value;
  let drinktype = form.drink.value;
  let answers = [];
  answers.push(username);
  answers.push(gender);
  answers.push(age);
  answers.push(ordertype);
  answers.push(drinktype);
  var newDiv = document.createElement("div");
  var ol = document.createElement("ol");
  ol.id = "style";
  newDiv.appendChild(ol);
  for (var i = 0; i < answers.length; i++) {
    var li = document.createElement("li");

    ol.appendChild(li);
    li.innerHTML = li.innerHTML + answers[i];
  }

  userInformation.innerHTML = "";
  userInformation.appendChild(newDiv);
}

let form = document.getElementById("form");
form.addEventListener("submit", submitted);
