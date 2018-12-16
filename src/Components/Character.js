import React, { Component } from 'react';

class Character extends Component{

  state={
    display: false,
    statsDisplay: false,
    houseDisplay: false,
    house: this.props.character.house
  }

    changeDisplay = (e) => {
      this.setState({
        display: !this.state.display
      })
      this.showOrHideHouseForm(e)
    }

    showOrHideHouseForm = (e) => {
      let form = e.target.parentElement.nextElementSibling
      this.state.display ? form.style.display = "block" : form.style.display = "none"
    }

  changeHouse = (e) => {
    let house = e.target.value
    this.props.updateCharacterHouse(this.props.character, house)
    // this.updateCharacterHouse(house)
  }

  updateCharacterHouse = (house) => {
    // let name = this.props.character.name.split(" ").join("%20")

    // fetch(`http://localhost:3001/potterstuff?name=${name}`, {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({house: house})
    // })
    this.setState({
      house: house
    })
  }

  charactersIndex = () => {
    return <div>
      <p>{this.props.character.name}, <span onClick={this.changeDisplay} className="HouseName">{this.props.character.house}</span></p>

      {this.houseDropdown()}

      <img className="img"  src={this.props.character.image1} alt={this.props.character.name}/>

    </div>

  }

  houseDropdown = () => {
    return <select defaultValue={this.props.character.house} onChange={this.changeHouse} style={{display:'none'}} name="house" id="">
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="RavenClaw">RavenClaw</option>
        <option value="HufflePuff">HufflePuff</option>
      </select>

  }

  // currentHouse = (house) => {
  //   if ( this.props.character.house === house){
  //     return "selected"
  //   } else {
  //     return ""
  //   }
  // }

  // otherHouses = () => {
  //   let houses = ["HufflePuff", "RavenClaw", "Gryffindor", "Slytherin"]
  //   let otherHouses = houses.filter(house => house !== this.props.character.house)
  //   return otherHouses.map(houseName => { return `${<option value=`${houseName}`>houseName</option>}`})
  // }

  changeHouseDisplay = (e) => {
    let dropdown = e.target.parentElement.nextElementSibling
    this.setState({
      houseDisplay: !this.state.houseDisplay
    })
    this.showDropDownInHouses(dropdown)
  }

  showDropDownInHouses = (dropdown) => {
    this.state.houseDisplay ? dropdown.style.display = "block" : dropdown.style.display = "none"
  }

  charactersInHouses = () => {
    return <div className="charInHouse">
        <img onClick={this.showStats} className="img"  src={this.props.character.image2} alt={this.props.character.name} style={{width: 200, height: 300, margin:'0px 5px'}}/>

        <div style={{display:'none'}} className="stats">
          <p>{this.props.character.name}</p>
          <p onClick={this.changeHouseDisplay}>{this.props.character.house}</p>

          <p>{this.props.character.role}</p>
          <p>{this.props.character.age} years old</p>
        </div>

          {this.houseDropdown()}

    </div>

  }

  showStats = (e) => {
    let stats = e.target.nextElementSibling
    this.setState({
      statsDisplay: !this.state.statsDisplay
    })
    this.showOrHideStats(stats)
  }

  showOrHideStats = (stats) => {
    this.state.statsDisplay ? stats.style.display = "block" : stats.style.display = "none"
  }

  render(){
    return(
      <div className="character">
        {this.props.context === "CharacterContainer" ? this.charactersIndex() : this.charactersInHouses()}
      </div>
    )
  }
}

export default Character;
