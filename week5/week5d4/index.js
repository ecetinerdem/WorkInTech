import axios from 'axios';

// Aşağıdaki Fonksiyonu değiştirmeyin

export async function ipAdresimiAl() {
  return await axios({
    method: 'get',
    url: 'https://apis.ergineer.com/ipadresim',
  }).then(function (response) {
    return response.data;
  });
}

/*

	ADIM 1: Aşağdıdaki getData() fonskiyonunda axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız:
  https://apis.ergineer.com/ipgeoapi/{ipAdresiniz}

  Fonksiyon gelen data'yı(obje) geri dönmeli
	
	NOT: ipAdresinizi ipAdresimiAl fonksiyonu ile alabilirsiniz.

  NOT2: gelen datayı browser'da network tab'ından inceleyin. 
  (network tab'ından inceleyemezseniz get isteklerinin URL'ini browser'dan açıp da kontrol edebilirsiniz. 😉)

  Bu data Adım 2'de oluşturacağınız component'de argüman olarak kullanılıyor, önden içindeki verilere(key-Value ikililerine) bakmanız iyi olur).
*/

export async function getData() {
  try {
    const ipAddress = await ipAdresimiAl();

    const response = await axios.get(
      `https://apis.ergineer.com/ipgeoapi/${ipAddress}`
    );

    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

/*
	ADIM 2: Aşağıdaki cardOlustur fonskiyonunu argüman olarak sadece 1 nesne alacak şekilde tanımlayın.

  Bu fonksiyonda DOM metotlarını ve özelliklerini kullanarak, aşağıdaki element'i oluşturup dönün.

  Not: Ülke Bayrağını bu linkten alabilirsiniz:
  'https://flaglog.com/codes/standardized-rectangle-120px/{ülkeKodu}.png';
	
	<div class="card">
    <img src={ülke bayrağı url} />
    <div class="card-info">
      <h3 class="ip">{ip adresi}</h3>
      <p class="ulke">{ülke bilgisi (ülke kodu)}</p>
      <p>Enlem: {enlem} Boylam: {boylam}</p>
      <p>Şehir: {şehir}</p>
      <p>Saat dilimi: {saat dilimi}</p>
      <p>Para birimi: {para birimi}</p>
      <p>ISP: {isp}</p>
    </div>
  </div>
*/

export function cardOlustur(data) {
  const cardClass = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');
  const paragraph4 = document.createElement('p');
  const paragraph5 = document.createElement('p');
  const paragraph6 = document.createElement('p');

  cardClass.className = 'card';
  cardInfo.className = 'card-info';

  img.src = `https://flaglog.com/codes/standardized-rectangle-120px/${data.ülkeKodu}.png`;
  h3.className = 'ip';
  h3.textContent = data.sorgu;

  paragraph1.className = 'ulke';
  paragraph1.textContent = `${data.ülke} (${data.ülkeKodu})`;

  paragraph2.textContent = `Enlem: ${data.enlem} Boylam:${data.boylam}`;
  paragraph3.textContent = `Şehir: ${data.şehir}`;
  paragraph4.textContent = `Saat dilimi: ${data.saatdilimi}`;
  paragraph5.textContent = `Para birimi: ${data.parabirimi}`;
  paragraph6.textContent = `ISP: ${data.isp}`;

  cardClass.append(img, cardInfo);
  cardInfo.append(
    h3,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6
  );

  return cardClass;
}
