import React from 'react';
import { Card } from 'react-bootstrap';
import "./CardsStyle.css"
// import { Button } from 'react-bootstrap';
// import characterSlice from '../redux/characterSlice';


const Cards = ({chars}) => {
    console.log("items",chars);

  
  return (

    <Card className="card">
  <Card.Img variant="top" src={chars?.img} />
  <Card.Body className="title">
    <Card.Title >{chars.name}</Card.Title>
    <Card.Text>
    {/* {char.} */}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>

  )
}


export default React.memo(Cards);
// export default Cards;
