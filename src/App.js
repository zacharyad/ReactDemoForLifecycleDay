import React from 'react'
import './App.css';
import axios from 'axios'
import Rezy from './Rezy' 
const urlEndpointForApi = 'https://random-data-api.com/api/restaurant/random_restaurant'


// Class comp

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { // "Zach"
      name: "Kenji",
      name2: "Zach",
      name3: "Luke",
      data: {}
    }
  }

  async componentDidMount(){
    console.log("we mounted")
    const {data} = await axios.get(urlEndpointForApi)
    console.log("Data from api:" ,data)
// setState will take the new version of state
    this.setState({...this.state, data}) // shorthand using data to be data: data

  }

  render(){
    console.log(this.props.newProps) // "new props"
    return (
      <div>
        <div>{this.state.data.name}</div>
        <div>{this.state.data.description}</div>
        <img src={this.state.data.logo} alt="rezy logo" />
        <Rezy coolGuy="Leland" rezyData={this.state.data} />
      </div>
    )

  }

}

export default App

/* 
I want to:
- Make a class component 
    - This should make an API get request for single restuarant data 
    - This should render the data of the restuarant Name, type, description, and an image
    - Additionally:
      -  Render times for this restaurant using a nested, modular/composable react component to render this data.
*/




