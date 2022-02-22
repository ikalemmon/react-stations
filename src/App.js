// DO NOT DELETE


import React, {useState} from 'react'
// import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */


export const App = () => {
  function Dog(){
    const [DogUrl, setDogUrl] = useState(
      "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"
    )
  }

  return (
    <div className="App">
      <header>初めてのReact</header>
      <img src={DogUrl}></img>
      <div>
        <h2>犬の画像を表示していくよ</h2>
      </div>
    </div>
  )
}
