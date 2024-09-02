import React, { useState } from 'react';
import { movies } from './sahteVeri';
import { Switch, Route } from 'react-router-dom';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';
import { Router } from 'react-router-dom';

export default function App() {
  const [kaydedilmisFilmler, setKaydedilmisFilmler] = useState([]);
  const [filmler, setFilmler] = useState(movies);

  /* Görev: 1
  kaydedilmiş filmler ve film listesi için 2 tane state tanımlayın.
  film listesini sahteVeri'den alın.
  */

  const KaydedilenlerListesineEkle = (movie) => {
    /* Görev: 2
    kaydedilmiş film listesine eklemek için bir click handle fonksiyonu yazın.
    aynı filmi 2. kez eklememeli.
    Kaydet butonunun olduğu component'e prop olarak gönderin.
    */
    const xyz = kaydedilmisFilmler.find((m) => m.id == movie.id);
    if (!xyz) {
      setKaydedilmisFilmler([...kaydedilmisFilmler, movie]);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={kaydedilmisFilmler} />
      <Switch>
        <Route exact path="/">
          <FilmListesi movies={filmler} />
        </Route>

        <Route path="/filmler/:id">
          <Film movies={filmler} save={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
      {/* 
      Görev 3: 2 adet route tanımlayın.
      1. route '/' olacak ve FilmListesi component'ini yükleyecek ve buraya film listesini prop olarak yollayacak.
      2. route '/filmler/' parametresinden sonra 'id' parametresini alacak  (örnek: '/filmler/2', '/filmler/3' id dinamik olacak). Bu route 'Film' bileşenini yükleyecek.
      */}
    </div>
  );
}
