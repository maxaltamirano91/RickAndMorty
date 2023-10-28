import "./App.css";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import About from "./components/About";
import Deatil from "./components/Deatil";
import Form from "./components/Form";
import store from "./components/redux/store";
import { Favorites } from "./components/Favorites";



function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(
      `https://rym2.up.railway.app/api/character/${id}?key=pi-maxaltamirano91`
    ).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  function onClose(id) {
    let stringAnumero = parseInt(id);

    setCharacters((prevCharacters) => {
      const newCharacters = prevCharacters.filter(
        (character) => character.id !== stringAnumero
      );
      return newCharacters;
    });
  }

  // LA FUNCION DE ABAJO TIENE LA MISMA FUNCIONALIDAD DE LA DE ARRIBA.

  // const onClose = (id) => {
  //    setCharacters(characters.filter(character => character.id !== Number(id)))
  //  }

  const location = useLocation();

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);

  const EMAIL = "max.smp17@gmail.com";
  const PASSWORD = "max12345";

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Deatil />} />
      </Routes>
    </div>
  );
}

export default App;
