function greetUser(name) {
  let greeting = `Hello ${name}, welcome to our website!`;
  console.log(greeting);
  document.getElementById("greetingOutput").textContent = greeting;
}

let button = document.getElementById("greetButton");
let input = document.getElementById("nameInput");

button.addEventListener("click", function() {
  let name = input.value;
  if (name.trim() !== "") {
    greetUser(name);
    input.value = "";
  }
});

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    button.click();
  }
});