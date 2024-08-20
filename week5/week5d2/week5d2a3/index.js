// Challenge 1: dokümandaki tüm resimlerin üzerine mouse ile gelince(mouseenter) üzerine gelinen resme class olarak grayscale eklensin. mouse çıkınca(mouseleave) grayscale classı çıkarılsın.
const images = document.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.classList.add('grayscale');
  });

  image.addEventListener('mouseleave', () => {
    image.classList.remove('grayscale');
  });
});

/*
Challenge 2: sayfa aktif iken(herhangi bir yerine mouse ile tıklayınca):
- klavyedeki 1 tuşuna basınca body'e theme1, 2'ye basınca theme2, 3'e basınca theme3 classlarını eklesin.
- "Esc" tuşuna basınca classı sıfırlasın
- Not: keyboard eventlerini document'e değil window'a ekleyin. 
*/
const body = document.querySelector('body');
window.addEventListener('keydown', (event) => {
  if (event.key === '1') {
    body.classList.add('theme1');
  } else if (event.key === '2') {
    body.classList.add('theme2');
  } else if (event.key === '3') {
    body.classList.add('theme3');
  } else if (event.key === 'Escape') {
    body.classList.remove('theme3', 'theme2', 'theme1');
  }
});

/*
Challenge 3: Input alanına bir şeyler yazınca(input event):
- Büyük harfe dönüştürsün
- 5 karakter'den büyük olduğunda buttonı enabled etsin. küçük ise disabled etsin.
*/

const input = document.querySelector('input');
const button = document.querySelector('form button');
input.addEventListener('input', () => {
  input.value = input.value.toUpperCase();
  if (input.value.length < 5) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});

/*
Challenge 4: Form submit edildiğinde;
- input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi..." yazsın.
- input alanını sıfırlasın.
- kaydet butonunu disabled yapsın.
*/
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  let paragraph = document.querySelector('#submitResult');
  if (!paragraph) {
    paragraph = document.createElement('p');
    paragraph.id = 'submitResult';
    document.body.appendChild(paragraph);
  }
  paragraph.textContent = `${input.value} başarı ile kaydedildi...`;
  input.value = '';
  button.disabled = true;
});
