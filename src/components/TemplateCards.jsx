import React from 'react';
import './TemplateCards.css';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function TemplateCards(props) {
  return (
    <div className="TemplateCards">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.heading}</Card.Title>
        <Card.Text>
          {props.pera}
        </Card.Text>
        <ButtonGroup aria-label="Basic example">
          <Button variant="light" className="bton"><FontAwesomeIcon icon={faEdit} /></Button>    <Button variant="light" className="bton"><FontAwesomeIcon icon={faTrash} /></Button>
        </ButtonGroup>
      </Card.Body>
    </div>
  );
}

export default TemplateCards;