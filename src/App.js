// DO NOT DELETE


import React, {useState} from 'react'
// import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */


export const App = () => {
    const [dogUrl, setDogUrl] = useState(
      "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"
    )
    
    const updateImage = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(
          (result) => {
            setDogUrl(result.message);
          },
          (error) => {
            console.log(error)
          }
        );
    }


  return (
    <div className="App">
      <header class="header">初めてのReact</header>
      <img src={dogUrl}></img>
      <div>
        <h2>犬の画像を表示していくよ</h2>
      </div>
      <button onClick={updateImage}>更新ボタン</button>
    </div>
  )
}
