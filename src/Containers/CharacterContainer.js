import React, { Component } from 'react';
import Character from '../Components/Character';
import Form from '../Components/Form';

class CharacterContainer extends Component{

  render(){
    let characters = this.props.characters.map(character => <Character context={this.props.context} updateCharacterHouse={this.props.updateCharacterHouse} key={character.image1} character={character}/>)
    return(
      <div className="CharacterContainer">
        <Form
          context="CharacterContainer" showFilteredCharacters={this.props.showFilteredCharacters}
        />
        {characters}
      </div>
    )
  }
}

export default CharacterContainer;
