import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {

  const[userList,setUserList]=useState([])

  const addHandler=(uName,uAge)=>{

    setUserList((prevList)=>{
    console.log(prevList)
    return[...prevList,{name:uName,age:uAge,id:Math.random().toString()}]

    })
  }




  return (
    <div>
   <AddUser onAddUser={addHandler}/>
   <UserList users={userList} />
   
    </div>
  );
}

export default App;
