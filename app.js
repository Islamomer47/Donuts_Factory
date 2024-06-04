let Name;
let gender;
Name = prompt("please enter your first name : ");
gender = prompt("please enter your gender -male or female- :");

// if (gender.toLowerCase() === "male") {
//   alert("welcome " + "Mr." + Name);
// } else if (gender.toLowerCase() === "female") {
//   alert("welcome " + "Ms." + Name.toLowerCase());
// } else {
//   alert("welcome, happy to see you! ");
// }
switch (gender.toLowerCase()) {
  case "male":
    alert("welcome " + "Mr." + Name.toLowerCase());
  case "female":
    alert("welcome " + "Ms." + Name.toLowerCase());
  default:
    alert("welcome, happy to see you! ");
}
let order, ordername;
order = prompt(
  "What would you like to order? (Donut, Coffee, Ice cream, Bakery):"
);
ordername = prompt("Please enter the flavor of the " + order);

alert(
  "Your order for  " +
    order +
    " with " +
    ordername +
    " flavor is getting prepared!"
);
console.log(Name + "ordered" + ordername + order);
