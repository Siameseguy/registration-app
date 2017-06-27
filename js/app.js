// get form selector
const form = document.querySelector('#registrar');
// get input selector
const input = document.querySelector('input');
// get ul selector
const ul = document.querySelector('#invitedList');

// write function that creates li elements with a label, checkbox, and remove button
function createLI(text) {
   // create li element
  const li = document.createElement('li');
  // append text of input into li then clear input
  li.innerHTML = text;

  // create label
  const label = document.createElement('label');
  label.innerHTML = "Confirmed";
  li.appendChild(label);

  // create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);

  // create remove button
  const button = document.createElement('button');
  button.innerHTML = 'remove';
  li.appendChild(button);
  return li;
}

// get eventListener to submit
form.addEventListener('submit', function(e){
  e.preventDefault();
  // grab value of input
  const text = input.value;
  const li = createLI(text);
  input.value = '';
  // append li to ul
  ul.appendChild(li);
});

// get event listener for checkbox
ul.addEventListener('change', function(e){
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  console.log(listItem);
  if(checked) {
    listItem.className = "responded";
  } else {
    listItem.className = "";
  }
});

// get event listener for remove button
ul.addEventListener('click', function(e){
  if(event.target.tagName === 'BUTTON') {
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
    e.preventDefault();
  }
});