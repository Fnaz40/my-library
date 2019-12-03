import React from 'react';
import './PopulerBook.css';
import { Card } from 'react-bootstrap';
// import book from 'book';
import TemplateCards from './TemplateCards';


function PopulerBook(props) {
    return (
        <div className="PopulerBook">
            <h1>Populer Books</h1>
            <div className="cardsdiv">
                <Card style={{ width: '18rem' }} className="card">
                    {/* <TemplateCards heading={props.details.volumeInfo.title} pera={props.details.volumeInfo.publishedDate} img={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} /> */}
                    <TemplateCards />
                </Card>
                <Card style={{ width: '18rem' }}>
                    {/* <TemplateCards heading={props.details.volumeInfo.title} pera={props.details.volumeInfo.publishedDate} img={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} /> */}
                    <TemplateCards />
                </Card>
                <Card style={{ width: '18rem' }}>
                    {/* <TemplateCards heading={props.details.volumeInfo.title} pera={props.details.volumeInfo.publishedDate} img={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} /> */}
                </Card>
            </div>
        </div>
    );
}

export default PopulerBook;