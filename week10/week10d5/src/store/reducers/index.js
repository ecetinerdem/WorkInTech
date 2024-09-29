import { NOTLARI_AL, NOT_EKLE, NOT_SIL } from '../actions';

const s10chLocalStorageKey = 's10d5';

const baslangicDegerleri = {
  notlar: [],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar !== null) {
    return localStorageStateOku(key);
  } else {
    localStorageStateYaz(key, baslangicDegerleri);
    return baslangicDegerleri;
  }
}
const initialState = baslangicNotlariniGetir(s10chLocalStorageKey);

function reducer(state = initialState, action) {
  switch (action.type) {
    case NOTLARI_AL:
      const yeniNotlar = {
        ...state,
        notlar: action.payload,
      };
      localStorageStateYaz(s10chLocalStorageKey, yeniNotlar);
      return yeniNotlar;
    case NOT_EKLE:
      const guncelNotlar = {
        ...state,
        notlar: [...state.notlar, action.payload],
      };
      localStorageStateYaz(s10chLocalStorageKey, guncelNotlar);
      return guncelNotlar;
    case NOT_SIL:
      const silinmisNotlar = {
        ...state,
        notlar: state.notlar.filter((not) => not.id !== action.payload),
      };
      localStorageStateYaz(s10chLocalStorageKey, silinmisNotlar);
      return silinmisNotlar;
    default:
      return state;
  }
}
export default reducer;
