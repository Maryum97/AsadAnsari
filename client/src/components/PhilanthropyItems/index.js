import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import './style.css';

const PhilCard = (props) => {
  return (
    <div className='card'>
      <Card>
        <CardImg className='card-img' top width="100%" src={props.item} alt="Card image cap" />
        <CardBody className='card-body'>
          <CardTitle tag="h5" className='text-center'>{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhilCard;