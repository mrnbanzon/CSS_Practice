let form = document.querySelector('form');

let nameLabel = document.createElement('label');
nameLabel.setAttribute('for', 'name');
nameLabel.innerText = 'Full Name: ';

let name = document.createElement('input');
name.setAttribute('type', 'text');
name.setAttribute('name', 'name');

form.appendChild(nameLabel);
form.appendChild(name);

let submit = document.createElement('input');
name.setAttribute('type', 'submit');
name.setAttribute('value', 'submit');

form.appendChild(submit);
