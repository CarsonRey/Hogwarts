import React from 'react';
import Character from '../Components/Character';
import Form from '../Components/Form';

const CharacterContainer = (props) => {

    let characters = props.characters.map(character => <Character context={props.context} updateCharacterHouse={props.updateCharacterHouse} key={character.image1} character={character}/>)
    return(
      <div className="CharacterContainer">
        <Form
          context="CharacterContainer" showFilteredCharacters={props.showFilteredCharacters}
        />
        {characters}
      </div>
    )
  }


export default CharacterContainer;
