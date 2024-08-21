
  
  /*
  Adım 1: Haber oluşturmak için 'HaberYapici' adında bir bileşen(component) oluşturun.
  Bileşeniniz, bir haber nesnesini argüman olarak alan bir fonksiyon olacak,
  ve aşağıdaki gibi görünen bir DOM düğümü oluşturup geri dönecek:
  
  <div class="article">
    <h2>{haber başlığı}</h2>
    <p class="tarih">{haber tarihi}</p>
  
    {üç ayrı paragraf elementi}
  
    <button class="expandButton">+</button>
  </div>
  
  Adım 2: Hala `HaberYapici` fonksiyonu içindeyiz, button.expandButton 'a bir click event listener ekleyin.
  Bu listener div.article öğesine 'article-open' class'ını ekleyip/çıkaracak(toggle).
  
  Adım 3: Fonksiyonunuzdan bir öğe döndürmeyi unutmayın.
  
  
  Adım 4: Fonksiyonunuzun dışında, tüm haberleri içeren datayı döngüye sokun(loop). 
  Yazdığınız 'HaberYapici' component'ini kullanarak bir div.article öğesi oluşturun ve bunu DOM'daki div.articles düğümüne ekleyin. (bknz. index.html).
  
  
  Adım 5: Yukarıdaki haberleri için data isimli diziye bulduğunuz bir teknoloji haberini eklemeyi deneyin. Diğer haber objeleri ile aynı yapıda olmasına dikkat edin.
  */
  
  function HaberYapici(haber) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
  
    const title = document.createElement('h2');
    title.textContent = haber.baslik;
  
    const date = document.createElement('p');
    date.className = 'tarih';
    date.textContent = haber.tarih;
  
    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = haber.ilkParagraf;
  
    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = haber.ikinciParagraf;
  
    const thirdParagraph = document.createElement('p');
    thirdParagraph.textContent = haber.ucuncuParagraf;
  
    const button = document.createElement('button');
    button.className = 'expandButton';
    button.textContent = '+';
  
    button.addEventListener('click', (event) => {
      articleDiv.classList.toggle('article-open');
    });
  
    articleDiv.appendChild(title);
    articleDiv.appendChild(date);
    articleDiv.appendChild(firstParagraph);
    articleDiv.appendChild(secondParagraph);
    articleDiv.appendChild(thirdParagraph);
    articleDiv.appendChild(button);
  
    return articleDiv;
  }
  
  const articlesContainer = document.querySelector('.articles');
  
  data.forEach((haber) => {
    const articleElement = HaberYapici(haber);
    articlesContainer.appendChild(articleElement);
  });
  