import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from "./components/elements/Avatar/Avatar";
import PostItem from "./components/elements/PostItem/PostItem";

function App() {

    const testData = [
        {
            link: 'https://avatars.mds.yandex.net/get-pdb/34158/3abb3398-b94f-4f5a-8c2b-c8efb29dc65d/s1200',
            name: 'Chelsie Hanz',
            desc: 'Mankato, Mississippi'
        },
        {
            link: 'https://avatars.mds.yandex.net/get-pdb/27625/8c43f21d-9374-4953-9a56-052dbf7638cb/s1200',
            name: 'Jhon Jhons',
            desc: 'Mankato, Mississippi'
        },
        {
            link: 'https://im0-tub-ru.yandex.net/i?id=f48b17786fa9829c427ddd15df3c6c7f-l&n=13',
            name: 'Ema Brick',
            desc: 'Frederick, Nebraska'
        }
    ]

    const getItems = () => {
        return testData.map(item => <PostItem imgSrc={item.link} src={item.link} name={item.name} desc={item.desc}/>)
    }


  return (
    <div className="App">
        <div className={'posts-list'}>
            {getItems()}
        </div>
    </div>
  );
}

export default App;
