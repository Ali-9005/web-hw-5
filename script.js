let array = [];

function add() {
  let name = document.getElementById("todothing").value.trim();
  if (name.length < 1) return;
  ``;
  if (array.includes(name)) return;

  var ul = document.getElementById("todo");
  var li = document.createElement("li");

  array.push(name);
  li.appendChild(document.createTextNode(`${array.length}. ${name}`));
  ul.appendChild(li);
}