import React from 'react'

function Me() {
  const user =localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : ''
   console.log(user);
  
  return (
    <div>
        <h3>Id :  <span>{user._id}</span></h3>
        <h3>Email :  <span>{user.email}</span></h3>
        <h3>name :  <span>{user.name}</span></h3>
    </div>
  )
}

export default Me