import { connect, useSelector } from "react-redux";
import Card from "./Card";

export const Favorites = ({ myFavorites }) => {
  return (
    <div>
      {myFavorites?.map((fav) => {
        <Card
          id={fav.id}
          nombre={fav.name}
          status={fav.status}
          gender={fav.gender}
          image={fav.image}
          origin={fav.origin}
          species={fav.species}
        />;
      })}
    </div>
  );
};

export const mapDispatchToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapDispatchToProps, null)(Favorites);
