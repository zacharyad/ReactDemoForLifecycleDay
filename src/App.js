import React from 'react'
import './App.css';
import axios from 'axios'
import Restaurant from './Restaurant'
const urlEndpointForApi = 'https://random-data-api.com/api/restaurant/random_restaurant'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "Random Restaurants",
      data: {}
    }
  }


  async componentDidMount(){
    // This is a good place for api calls
    let {data} = await axios.get(urlEndpointForApi)
    console.log("Res: ", data)
    this.setState({data: data})

  }


  render(){
    // this is a place for some JS
    return (
      // JSX land
      <>
        <div>{this.state.title}</div>
        {/* <div>{JSON.stringify(this.state.data)}</div> */}


        <Restaurant resData={this.state.data} />

      </>

    )
  }




}

export default App


