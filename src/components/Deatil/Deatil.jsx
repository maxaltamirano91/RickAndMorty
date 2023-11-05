import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Deatil =()=>{

    // const {id} = useParams;
    // console.log(id);

    const [character, setCharacter] = useState({});

    // useEffect(() => {
    //     axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-maxaltamirano91`).then(
    //        ({ data }) => {
    //           if (data.name) {
    //              setCharacter(data);
    //           } else {
    //              window.alert('No hay personajes con ese ID');
    //           }
    //        }
    //     );
    //     return setCharacter({});
    //  }, [id]);


    return(
    <div>
        <h2>SOY EL DETAIL</h2>
    </div>
    )
    
}

export default Deatil;