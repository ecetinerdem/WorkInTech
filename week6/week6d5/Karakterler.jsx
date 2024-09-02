import { Film } from './Film';
import styled from 'styled-components';

const KarakterCard = styled.div`
padding: 1rem;
margin: 1rem;
border: 1px solid #ccc;
border-radius: 0.5rem;
`;

const Paragraf = styled.p`
display: flex;
text-align: left;
border-bottom: 1px solid #ddd;
padding-bottom: 0.5rem;
margin-bottom: 0.5rem;
`;

const Label = styled.span`
flex-basis: 50%;
`;

const Value = styled.span`
flex: 1;
font-weight: bold;
`;

export const Karakter = ({ karakter, filmler }) => {
  return (
    <KarakterCard>
      <h3>{karakter.name}</h3>
      <Paragraf>
        <Label>Birth year</Label>
        <Value>{karakter.birth_year}</Value>
      </Paragraf>
      <Paragraf>
        <Label>Eye color</Label>
        <Value>{karakter.eye_color}</Value>
      </Paragraf>
      <Paragraf>
        <Label>Gender</Label>
        <Value>{karakter.gender}</Value>
      </Paragraf>
      <Paragraf>
        <Label>Height</Label>
        <Value>{karakter.height}</Value>
      </Paragraf>
      <Paragraf>
        <Label>Mass</Label>
        <Value>{karakter.mass}</Value>
      </Paragraf>
      <Paragraf>
        <Label>Skin color</Label>
        <Value>{karakter.skin_color}</Value>
      </Paragraf>
      <h4>Filmler:</h4>
      {karakter.films.map((filma) => {
        // Find the film with the current filmId
        const film = filmler.find((film) => film === filma);
        return <Film film={film} />;
      })}
    </KarakterCard>
  );
};
