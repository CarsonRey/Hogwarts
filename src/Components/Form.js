import React, { Component } from 'react';

class Form extends Component{

  state = {
    searchInput: "",
    name: "",
    age: "",
    house: "",
    role: "",
    image1: "",
    image2: ""
  }

  setFilterState = (e) => {
    e.preventDefault()
    this.props.showFilteredCharacters(this.state.searchInput)
  }

  storeInput = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  objectWithoutKey = (object, key) => {
    const {[key]: deletedKey, ...otherKeys} = object;
    return otherKeys;
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newChar = this.objectWithoutKey(this.state, 'searchInput')
    this.props.newCharacter(newChar)

    // fetch('http://localhost:3001/potterstuff', {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({name: this.state.name, age: this.state.age, house: this.state.house, role: this.state.role, image1: this.state.image1, image2: this.state.image2})
    // })
  }


  addNewCharacterForm = () => {
    return <div className="addNewCharacterForm">
            <h5>Add A New Character!</h5>
            <form onSubmit={this.handleSubmit}>
             <input type="text" onChange={this.storeInput} name="name" placeholder="Name"/>
             <input type="text" onChange={this.storeInput} name="age" placeholder="Age"/>
             <input type="text" onChange={this.storeInput} name="house" placeholder="House"/>
             <input type="text" onChange={this.storeInput} name="role" placeholder="Role"/>
             <input type="text" onChange={this.storeInput} name="image1" placeholder="Image1"/>
             <input type="text" onChange={this.storeInput} name="image2" placeholder="Image2"/>
             <input type="submit" value="Add a new character!"/>
            </form>
          </div>


  }


  searchForm = () => {
    return <form onSubmit={this.setFilterState}
    action="" className="search">
      <input onChange={this.storeInput} name="searchInput" type="text"/>
      <input type="submit" name="submit" value="Search"/>
    </form>
  }

  render(){
    return(

        this.props.context === "CharacterContainer" ? this.searchForm() : this.addNewCharacterForm()

    )
  }
}

export default Form;
