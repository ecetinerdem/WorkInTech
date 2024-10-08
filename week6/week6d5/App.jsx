import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Karakter } from './components/Karakter';

const App = () => {
  /*
   ADIM 1: Uygulama yüklendiğinde axios ile karakter datasını ve filmleri çekin:
    GET: https://workintech-fe-ecommerce.onrender.com/characters
    GET: https://workintech-fe-ecommerce.onrender.com/films
   * Bu 2 datayı da ayrı ayrı state'lere aktarın.
   * JSX'de; karakterler state'indeki her bir karakter'i .map ile Karakter component'ine tüm filmler ile gönderelim.
   * Karakter component'ine karakteri ve tüm filmleri prop olarak göndermeye dikkat.
  */
  const [karakterler, setKarakterler] = useState([]);
  const [filmler, setFilmler] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          'https://workintech-fe-ecommerce.onrender.com/characters'
        );
        setKarakterler(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    async function getFilm() {
      try {
        const response = await axios.get(
          'https://workintech-fe-ecommerce.onrender.com/films'
        );
        setFilmler(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getFilm();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {karakterler.map((karakter) => (
        <Karakter karakter={karakter} filmler={filmler} />
      ))}
    </div>
  );
};

export default App;
