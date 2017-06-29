// get form selector
const form = document.querySelector('#registrar');
// get input selector
const input = document.querySelector('input');

const mainDiv = document.querySelector('.main');
// get ul selector
const ul = document.querySelector('#invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.innerHTML = "Hide those who haven't responded";
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);

filterCheckbox.addEventListener('change', function(e){
  const isChecked = e.target.checked;
  const lis = ul.children;

  if(isChecked) {
    for(let i = 0; i < lis.length; i++) {
      let li = lis[i];
      if(li.className === 'responded') {
        li.style.display = '';
      } else {
        li.style.display = 'none';
      }
    }
  } else {
    for(let i = 0; i < lis.length; i++) {
      let li = lis[i];
      li.style.display = '';
    }
  }
});

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

  const editButton = document.createElement('button');
  editButton.innerHTML = 'edit';
  li.appendChild(editButton);

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
  if(e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.textContent === 'remove') {
      ul.removeChild(li);
      e.preventDefault();
    } else if(button.textContent === 'edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.value = span.innerHTML;
      input.type = 'text';
      li.insertBefore(input, span);
      li.removeChild(span);
      button.innerHTML = 'save';
    } else if(button.textContent === 'save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.innerHTML = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.innerHTML = 'edit';
    }
  }

});