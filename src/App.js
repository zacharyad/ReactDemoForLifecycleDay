import React from 'react'
import './App.css';
import axios from 'axios'
const urlEndpointForApi = 'https://random-data-api.com/api/restaurant/random_restaurant'

/* 
I want to:
- Make a class component 
    - This should make an API get request for single restuarant data 
    - This should render the data of the restuarant Name, type, description, and an image
    - Additionally:
      -  Render times for this restaurant using a nested, modular/composable react component to render this data.
*/

