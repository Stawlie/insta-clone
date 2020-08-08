import React from 'react';
import './App.css';
import PostsList from "./components/lists/PostsList/PostsList";
import data from "./data";

function App() {

    console.log(data)

  return (
    <div className="App">
        <PostsList items={data} />
    </div>
  );
}

export default App;
