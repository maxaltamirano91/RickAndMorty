import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Deatil = () => {
  const { id } = useParams;


  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(
    //   `https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`
      `http://localhost:3001/rickandmorty/character/${id}?key={tuApiKey}`
      //
    ).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character.name && (
        <>
          <h1>{character.name}</h1>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.name}</p>
          {character.origin.name}
          {character.image}
          
        </>
      )}
    </div>
  );
};

export default Deatil;
