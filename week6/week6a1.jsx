/*

ADIM 0:
  Aşağıdaki bileşeni inceleyerek ve state hookunu import ederek başlayın.

ADIM 1:
  State hookunu kullanarak bir state oluşturun.
  Bu state'in başlangıç değeri 0 olsun.

ADIM 2:
  'stil' nesnesinde 'color' özelliği sabit olarak "royalblue" olarak belirlenmiş.
  Eğer sayı çiftse "royalblue", değilse "crimson" olacak şekilde kodu düzenleyiniz.

ADIM 3:
  JSX'te bazı statik kodlanmış bilgiler var. Buralarda süslü paranetezler içinde JS ifadeleri kullanarak dinamik hale getirebiliriz. 
  Öncelikle, statik olarak yazılmış "0" sayısını state'deki sayı'dan gelmesini sağlayın.
  Sonra sayı çift ise ekranda "Sayı: 0 çift sayıdır", tek ise "Sayı: 1 tek sayıdır" metni görünecek şekilde kodu düzenleyiniz.

ADIM 4:
  Bu click handler'ı, tıklandığında state'deki sayıyı 1 artıracak şekilde yazın.
  - İpucu: state'in setter'ını kullanmaya dikkat.
  - İpucu: ++ operatörünü kullanmayın.

ADIM 5:
  Bu click handler'ı, tıklandığında state'deki sayıyı 1 azaltacak şekilde yazın.
  - İpucu: state'in setter'ını kullanmaya dikkat.
  - İpucu: -- operatörünü kullanmayın.

ADIM 6:
	Bu click handler'ı, tıklandığında state'deki sayıyı 0 yapmalı.
  - İpucu: state'in setter'ını kullanmaya dikkat.
*/

import React, { useState } from 'react'; /* ADIM 0 */

export default function Sayac() {
  const [state, setState] = useState(0);

  const artirici = () => {
    setState(state + 1);
  };
  const azaltici = () => {
    setState(state - 1);
  };
  const reset = () => {
    setState((state = 0));
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'royalblue',
    ...(state % 2 !== 0 && { color: 'crimson' }),
  };

  return (
    <div className="widget-counter container">
      <h2>Sayaç</h2>
      <div id="sayici" style={stil}>
        Sayı: {state} {state % 2 === 0 ? 'çift sayıdır' : 'tek sayıdır'}
      </div>
      <div>
        <button id="artirici" onClick={artirici}>
          Artırıcı
        </button>
        <button id="decrement" onClick={azaltici}>
          Azaltıcı
        </button>
        <button id="resetCount" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}