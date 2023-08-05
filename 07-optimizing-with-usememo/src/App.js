import React, { useState, useCallback,useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [title,setTitle]=useState('Change to decending order');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

const changeTitleHandler1=()=>{
  setTitle((prevTitle)=>{
    if(prevTitle==='Change to decending order')
    return 'Change to acending order'
    else
    return 'Change to decending order'
  })
}

const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className='app'>
      <DemoList title={title} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeTitleHandler1} >{title}</Button>
    </div>
  );
}

export default App;
