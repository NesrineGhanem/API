import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserList = () => {
  const [listofuser, setlistofuser] = useState([]);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {console.log(res.data); setlistofuser(res.data)})
    .catch((e) => console.log(e));
  }, []);
  
  
    return (

    <div className='row'>
        
        {listofuser.map((el, index) => (
            <div className='col-6' key={index}>
             <Card >
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU" 
      style={{width:'100px'}}/>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>phone: {el.phone}</Card.Text>
        <Card.Text>username: {el.username}</Card.Text>
        <Card.Text>company: {el.company.name}</Card.Text>
        <Card.Text>address: {el.address.city}</Card.Text>
        
        
      </Card.Body>
    </Card>  
              

            </div>)
        )


        }


    </div>
  )
}

export default UserList