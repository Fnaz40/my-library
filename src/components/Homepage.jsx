import React from 'react';
import Navbar from './NavBar';
import Slider from './Slider';
import InputSection from './InputSection';
import PopulerBook from './PopulerBook';
import Contact from './Contact';
import AboutUs from './AboutUs';
// import SocialIcon from './SocialIcon';
// import React, { useState } from 'react';
import PropType from 'prop-types';
// import axios from 'axios';



function Homepage(props){
    // const [searchTerm, setSearchTerm] = useState('');
    // const onInputChange = (e) => {
    //   setSearchTerm(e.target.value);
    // }

    // let API_URL = `https://www.googleapis.com/books/v1/volumes`;
    // const [books, setBooks] = useState({ items: [] });
    // const fetchBooks = async () => {
    //     // Ajax call to API using Axios
    //     const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    //     // Books result
    //     setBooks(result.data);
    // }
    //   // Submit handler
    //   const onSubmitHandler = (e) => {
    //     // Prevent browser refreshing after form submission
    //     e.preventDefault();
    //     // Call fetch books async function
    //     fetchBooks();
    // }
    return(
        <div className="homepage">
            <Navbar />
            <Slider />
            {/* {books.item.map(book => <InputSection details={book}  searching={onInputChange} form={onSubmitHandler} />)} */}
            <InputSection />
            <PopulerBook />
            <Contact />
            <AboutUs />
            {/* <SocialIcon /> */}
        </div>
    );
}

export default Homepage;


Homepage.propTypes = {
    searching: PropType.object,
    form: PropType.func,
    details: PropType.object
}

