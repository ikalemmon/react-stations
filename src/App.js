// DO NOT DELETE



import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */


export const App = () => {
  function Dog(){
    const [DogURL, setDogURL] = React.useState(
      "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"
    )
  }

  return (
    <div className="App">
      <header>初めてのReact</header>
      <img src={DogURL}></img>
      <div>
        <h2>犬の画像を表示していくよ！！</h2>
      </div>
    </div>
  )
}
