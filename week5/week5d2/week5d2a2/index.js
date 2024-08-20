const button = document.createElement('button');
button.id = 'acKapa';
button.textContent = 'Karanlık temayı aç';

const descriptionDiv = document.querySelector('.description');
descriptionDiv.appendChild(button);

const body = document.querySelector('body');

function karanlikTemayiAcKapa() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    button.textContent = 'Karanlık temayı aç';
  } else {
    body.classList.add('dark');
    button.textContent = 'Karanlık temayı kapat';
  }
}

button.addEventListener('click', karanlikTemayiAcKapa);
