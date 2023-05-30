import React, { useState, useEffect } from "react";




export default function Maping() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        response.json()
          .then((data) => {
            setUsers(data);
          });
      });
  }, []);
  return (
    <div>

<h1 className='p-4 text-2xl'>User List</h1>
     
       
{
  users.map((user, index)=>(
 <div className='border p-4' key={user.id}>
  <p >No : {index + 1} </p> 
 <p >Name : {user.name} </p>
 <p >User Name : {user.username} </p>

  <p>City : {user.address.city}</p>
 </div>

  ))
}

     


    </div>
  );
}





