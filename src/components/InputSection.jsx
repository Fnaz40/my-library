import React from 'react';
import './InputSection.css';
import InputGroup from 'react-bootstrap/InputGroup';
import { Dropdown } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';


function InputSection(props) {

    const bookAuthors = authors => {
        if (authors.length <= 2) {
          authors = authors.join(' and ');
        } else if (authors.length > 2) {
          let lastAuthor = ' and ' + authors.slice(-1);
          authors.pop();
          authors = authors.join(', ');
          authors += lastAuthor;
        }
        return authors;
      }; 

    return (
        <div className="InputSection">
            <FormControl type="text" placeholder="Book Title" className="mr-sm-2" />
            <InputGroup className="mb-3">
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    id="input-group-dropdown-1"
                    className="button"

                >
                    <Dropdown.Item href="#">Hororr</Dropdown.Item>
                    <Dropdown.Item href="#">Development</Dropdown.Item>
                    <Dropdown.Item href="#">abc</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-describedby="basic-addon1" placeholder="Book Category" />
            </InputGroup>
            <InputGroup className="mb-3">
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-describedby="basic-addon1" placeholder="Book Author" />
            </InputGroup>
                <FormControl aria-describedby="basic-addon1" placeholder="Find Book" id="finding" />
        </div>
    );
}

export default InputSection;