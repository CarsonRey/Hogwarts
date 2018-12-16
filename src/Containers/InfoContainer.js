import React from 'react';
import HouseContainer from './HouseContainer';
import Form from '../Components/Form';


const InfoContainer = (props) => {
  return(
    <div className="InfoContainer">
      <HouseContainer
        context="HouseContainer"
        characters={props.characters}
        updateCharacterHouse={props.updateCharacterHouse}
      />
      <Form newCharacter={props.newCharacter} context="InfoContainer"/>
    </div>

  )
}

export default InfoContainer;
