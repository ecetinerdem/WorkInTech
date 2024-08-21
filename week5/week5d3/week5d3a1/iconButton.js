/*
  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/
function IconButton(btnText, btnColor, iconClass) {
    let button = document.createElement('button');
    let icon = document.createElement('i');
  
    button.className = `btn btn-${btnColor}`;
    icon.className = iconClass;
    button.textContent = btnText;
    button.appendChild(icon);
  
    return button;
  }
  
  const firstButton = IconButton('Aç', 'blue', 'fa fa-folder-open');
  const secondButton = IconButton('Düzenle', 'orange', 'fa fa-pen');
  const thirdButton = IconButton('Sil', 'red', 'fa fa-trash');
  
  const iconButtonsDiv = document.getElementById('icon-buttons');
  
  iconButtonsDiv.appendChild(firstButton);
  iconButtonsDiv.appendChild(secondButton);
  iconButtonsDiv.appendChild(thirdButton);
  