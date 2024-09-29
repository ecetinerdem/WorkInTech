import axios from 'axios';
import { toast } from 'react-toastify';

export const NOT_EKLE = 'NOT_EKLE';
export const NOT_SIL = 'NOT_SIL';
export const NOTLARI_AL = 'NOTLARI_AL';

export function notEkle(not) {
  return { type: NOT_EKLE, payload: not };
}

export function notSil(id) {
  return { type: NOT_SIL, payload: id };
}

export function notlariAl(notlar) {
  return { type: NOTLARI_AL, payload: notlar };
}

export const notEkleAPI = (yeniNot) => (dispatch) => {
  axios
    .post('https://nextgen-project.onrender.com/api/s10d5/gratitudes', yeniNot)
    .then((res) => {
      if (res.status === 201) {
        dispatch(notEkle(res.data));
      }
      // res.data objesi içerisinden ihtiyaç duyduğun değeri bul ve oluşturduğun notEkle ile dispatch et (status codea dikkat)
    })
    .catch((error) => console.log(error));
};

export const notlariAlAPI = () => (dispatch) => {
  axios
    .get('https://nextgen-project.onrender.com/api/s10d5/gratitudes')
    .then((res) => {
      if (res.status === 200) {
        // response olarak gelen datayı notlariAl ile dispatch et.
        dispatch(notlariAl(res.data));
      }
    })
    .catch((error) => console.log(error));
};

// notSilAPI buraya
export const notSilAPI = (id) => (dispatch) => {
  axios
    .delete(`https://nextgen-project.onrender.com/api/s10d5/gratitudes/${id}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch(notSil(id));
      }
    })
    .catch((error) => {
      console.error(error);
      toast.warning('Bir hata oluştu!');
    });
};
