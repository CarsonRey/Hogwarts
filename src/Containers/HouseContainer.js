import React, { Component } from 'react';
import Character from '../Components/Character';

class HouseContainer extends Component{


  charactersByHouse = (house) => {
    let filter = this.props.characters.filter(character => character.house === house)
    let characters = filter.map( character => <Character key={character.name} updateCharacterHouse={this.props.updateCharacterHouse} context={this.props.context} character={character}/>)
    return characters
  }

  render(){
    return(
      <div className="HouseContainer">
        <div className="house">
          <h3 className="name">Gryffindor</h3>
          {this.charactersByHouse("Gryffindor")}
        </div>
        <div className="house">
          <h3 className="name">Slytherin</h3>
          {this.charactersByHouse("Slytherin")}
        </div>
        <div className="house">
          <h3 className="name">RavenClaw</h3>
          {this.charactersByHouse("RavenClaw")}
        </div>
        <div className="house">
          <h3 className="name">HufflePuff</h3>
          {this.charactersByHouse("HufflePuff")}
        </div>
      </div>
    )
  }
}

export default HouseContainer;
