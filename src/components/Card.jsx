import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { addFav } from "./redux/actions";
import { removeFav } from "./redux/actions";
import { useEffect } from "react";
import { useState } from "react";


export const Card = (props) => {


  useEffect(() => {
   props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.myFavorites]);

  const [isFav, setIsfav] = useState(false);

  const handleFavorite = () => {
     const character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image
     };

    if (isFav) {
      setIsfav(false);
      removeFav(props.id);
    } else{
      setIsfav(true);
      addFav(character);
    }
  };

  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button
        onClick={() => {
          props.onClose(props.id);
        }}
      >
        X
      </button>

      <Link to={`/detail/${props.id}`}>
        <h3 className="card-name">{props.name}</h3>
      </Link>
      {/* <h2>{props.name}</h2> */}
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin.name}</h2>
      <img src={props.image} alt="" />
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character)), dispatch(removeFav());
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};


export const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites
   };
 };

export default connect(mapStateToProps,mapDispatchToProps)(Card);