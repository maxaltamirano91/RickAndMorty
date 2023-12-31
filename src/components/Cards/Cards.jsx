import Card from '../Card/Card'; 
import styles from './Cards.module.scss'


export default function Cards(props) {
   return(
      <div className={styles.cardsContainer}>
         {props.characters.map(character =>{
            return <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={props.onClose}
            />
         })}
      </div>
   );
    
}


