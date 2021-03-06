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

  const span = document.createElement('span');
  span.innerHTML = text;
  li.appendChild(span);

  // create label
  const label = document.createElement('label');
  label.innerHTML = "Confirmed";
  li.appendChild(label);

  // create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);

  // create edit button
  const editButton = document.createElement('button');
  editButton.innerHTML = 'edit';
  li.appendChild(editButton);

  // create remove button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'remove';
  li.appendChild(deleteButton);
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
  if(e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.innerHTML === 'remove') {
      ul.removeChild(li);
      e.preventDefault();
    } else if(button.innerHTML === 'edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.innerHTML;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.innerHTML = 'save';
    } else if(button.innerHTML === 'save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.innerHTML = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
    }
    
  }
});