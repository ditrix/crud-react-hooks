import React, {useState, useEffect} from 'react';
import './App.css';

import {AddUserForm} from './AddUserForm'
import {UserTable} from './UserTable'

import {EditUserForm} from './EditUserForm'


function App() {

  const initUsers = [{id: 1, name:'john', email:'john@mail.com'},{id:2, name:'iren', email:'iren@mail.com'}]
  //const initUsers = []
  const initUser = {id:null,name:'',email:''}  

  const [users, setUsers] = useState(initUsers)

  const [editRegim, setEditRegim] = useState(false)

  

  const [currentUser, setCurrentUser] = useState(initUser)

  
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users,user])
  }


  const deleteUser = uid => {
    setUsers(users.filter(user => user.id !== uid))
  }


  const editUser = user => {
    setCurrentUser(user)
    setEditRegim(true)
  }

  const updateUser = currentUser => {
    console.log(currentUser)

   setUsers(users.map(user => (user.id === currentUser.id)?currentUser:user))


    setEditRegim(false)
  }
  
  const cancelEdit = () => {
     setEditRegim(false) 
  }

  return (
    <div className="container">
      <aside>
        {(editRegim)?
        <EditUserForm user={currentUser} updateUser={updateUser} cancelEdit={cancelEdit} />
        :  
        <AddUserForm addUser={addUser} />
        }
      </aside>
      <main><UserTable users={users} deleteUser={deleteUser} editUser={editUser}  /></main>
    </div>
  );
}

export default App;
