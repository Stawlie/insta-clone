import React from 'react';
import './App.css';
import PostsList from "./components/lists/PostsList/PostsList";
import Header from "./components/elements/Header/Header"
import data from "./data";

function App() {

    console.log(data)

  return (
    <div className="App">
        <Header Avatar={data[0].link}/>
        <PostsList items={data} />
    </div>
  );
}

export default App;
