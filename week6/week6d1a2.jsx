/*
ADIM 0:
  Aşağıdaki bileşeni inceleyin ve state hook'u import edin.

ADIM 1:
  State hookunu kullanarak bir state oluşturun.
  Bu state'in başlangıç değeri ilkRuhHali olsun.
  Farklı ruh halleri önceden tanımlandı(satır 24-26), bu uzun cümleleri bileşen içine tekrar yazmanıza gerek yok.

ADIM 2:
  Eğer state mutluysa rengi royalblue yapın, diğer durumlar için crimson yapın.

ADIM 3:
  JSX içinde statik olarak yazılmış "Nasıl hissettiğimi bilmiyorum :-|" silip state'deki duruma göre olan metnin görünmesini sağlayın.

ADIM 4, 5, 6:
  Click handler içinde state'in setter'ını kulanarak aşağıda tanımlanmış değişkenleri kullanarak state'de tuttuğunuz metni güncelleyin.
*/

import React, { useState } from 'react'; /* ADIM 0 */

const ilkRuhHali = 'Nasıl hissettiğimi bilmiyorum :-|';
const mutluRuhHali = 'Oldukça mutlu :)';
const uzgunRuhHali = 'Oldukça üzgün :(';

export default function RuhHalleri() {
  const [state, setState] = useState(ilkRuhHali);

  const mutluEt = () => {
    setState(mutluRuhHali);
  };
  const uZ = () => {
    setState(uzgunRuhHali);
  };
  const reset = () => {
    setState(state);
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: 'crimson' /* ADIM 2 */,
    ...(state === mutluRuhHali && { color: 'royalblue' }),
  };

  return (
    <div className="widget-moods container">
      <h2>RuhHalleri</h2>
      <div id="ruhHali" style={stil}>
        {state}
      </div>{' '}
      <div>
        <button id="mutluEt" onClick={mutluEt}>
          Mutlu Et
        </button>
        <button id="uz" onClick={uZ}>
          Üz
        </button>
        <button id="resetRuhHali" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}