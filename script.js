const userName = prompt("What is your name?");
const validName = userName?.trim() || "";

if (validName === "") {
  alert("Error: Name was not entered!");
} else {
  alert(`Hello, ${validName}! How are you?`);
}
