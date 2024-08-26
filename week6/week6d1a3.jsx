/*
ADIM 0:
Aşağıdaki bileşeni inceleyerek ve state hookunu import ederek başlayın.

ADIM 1:
  State hookunu kullanarak bir state oluşturun.
  Sayfa ilk yüklendiğinde Döndürücü ekranda görünür olmalı. Bu durumda state'in başlangıç değeri ne olmalı?

ADIM 2:
  Burada bir conditional rendering var. 
  '&&'nin her iki yanındaki ifadeler true ise, sağdaki değer tüm ifadenin değeri olur. 
  '&&'nin her iki tarafında bir ifade varsa ve false sa, soldaki tüm satırın değeri olur. 
  Statik olarak yazılmış 'true' değerini state'deki durumuna göre değiştirin.

ADIM 3:
  State değerine bağlı olarak buton'da "Gizle" veya "Göster" metni görünecek şekilde buradaki statik 'Gizle' yazısını düzenleyin.

ADIM 4:
  Bu click handler'ı, state'deki değeri değiştirmek için kullanabilirsiniz.
  -İpucu: 'not' için hangi operatörü kullanıyorduk. 
*/

import React, { useState } from 'react'; /* ADIM 0 */

export default function Dondurucu() {
  const [state, setState] = useState(true);

  const toggleDondurucu = () => {
    setState(!state);
  };

  return (
    <div className="widget-spinner container">
      <h2>Döndürücü</h2>
      {
        state && (
          <div id="döndürücü" className="spinner">
            --+--
          </div>
        )
        /* ADIM 2 */
      }
      <button id="toggleDondurucu" onClick={toggleDondurucu}>
        {state ? 'Gizle' : 'Göster'}
      </button>
    </div>
  );
}