import React, { Component } from 'react';
import CharcterContainer from './Containers/CharacterContainer';
import InfoContainer from './Containers/InfoContainer';


class App extends Component {

  state={
    characterList: [],
    filteredCharacters: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/potterstuff')
    .then(response => response.json())
    .then(characters => {
      this.setState({
        characterList: characters,
        filteredCharacters: characters
      })
    })
  }

  showFilteredCharacters = (searchInput) => {
    let filteredCharacters = [...this.state.characterList].filter(character => character.name.includes(searchInput) || character.house.includes(searchInput))

    this.setState({
      filteredCharacters: searchInput === ("" || " ") ? this.state.characterList : filteredCharacters
    })
  }

  newCharacter = (character) => {
    let newCharacterList = [...this.state.characterList, character]
    this.setState({
      characterList: newCharacterList,
      filteredCharacters: newCharacterList
    })
  }

  updateCharacterHouse = (characterObj, house) => {
    let updatedCharacterList = [...this.state.characterList]
    let character = updatedCharacterList.find( character => character === characterObj)
    character.house = house
    this.setState({
      characterList: updatedCharacterList,
      filteredCharacters: updatedCharacterList
    })
  }


  render() {
    return (
      <div className="App">
        <CharcterContainer
          showFilteredCharacters={this.showFilteredCharacters} context="CharacterContainer" characters={this.state.filteredCharacters}
          updateCharacterHouse={this.updateCharacterHouse}
        />
        <InfoContainer
          newCharacter={this.newCharacter}
          context="HouseContainer"
          characters={this.state.characterList}
          updateCharacterHouse={this.updateCharacterHouse}
        />
      </div>
    );
  }
}

export default App;
