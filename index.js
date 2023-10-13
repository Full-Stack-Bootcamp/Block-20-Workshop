const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  // Step 4 Grab root, create h1, add text, append doc
  const root = document.getElementById("root");
  const h1 = document.createElement("h1");
  h1.innerText = "FREELANCERS";
  root.append(h1);

  // Step 5 Create unordered list
  const list = document.createElement("ul");

  // Step 6 Loop through users and create li elements
  users.forEach((user) => {
    let newItem = document.createElement("li");
    newItem.innerText = `[name: ${user.name}, age: ${user.age}, occupation: ${user.occupation}]`;
    list.append(newItem);
  });

  // Step 7 Append elements to document
  root.append(list);
}
//call the main function
main();
