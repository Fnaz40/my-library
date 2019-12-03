import React from 'react';
import PropType from 'prop-types';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Cards(props) {
  return (
    <Card.Body>
      <Card.Title>
        {props.img}
      </Card.Title>
      <Card.Text>
        {props.pera}
      </Card.Text>
      <ButtonGroup className="btn-group">
                    <Button variant="light" className="text-info"><FontAwesomeIcon icon={faEdit} /></Button>
                    <Button variant="light" className="text-danger"><FontAwesomeIcon icon={faTrash} /></Button>
              </ButtonGroup>
    </Card.Body>
  );
}

export default Cards;