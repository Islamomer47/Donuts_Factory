let Name;
let gender;
Name = prompt("please enter your first name : ");
gender = prompt("please enter your gender -male or female- :");

while (gender !== "female" && gender !== "male") {
  gender = prompt("Please enter your gender:");
}
alert("welcome " + Name);

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

let answers = [];
answers.push(Name);
answers.push(gender);
answers.push(order);
answers.push(ordername);

for (let i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}
