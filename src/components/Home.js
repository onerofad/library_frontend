import React from 'react'
import { useState, useEffect } from 'react';
import getBookApi from '../services/API.js';
import 'semantic-ui-css/semantic.min.css'
import Header from './Header.js';
import { Link } from 'react-router-dom';

const Home = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
       getBooks();
    }, []
    )

    const getBooks = () => {
        getBookApi.get("/")
         .then((res)=> setBooks(res.data))
          .catch(console.error)
    }
    return(
        <div>
        <Header />
        <div className='ui stackable divided four column grid'>
            {
                books.map((book) => {
                    let output = ""
                    if(book.book_issued){
                       output += "This book is Not Available to Borrow"
                    }else{
                        output += "This book is Available to Borrow"

                    }
                    return(
                        <div className="column">
                            <div className='ui fluid card'>
                                <div className='ui image'>
                                    <img src={"/images/books/"+book.name} alt="" />
                                </div>
                                <div className='content'>
                                    <div className='meta'>
                                       <Link to="">{book.name}</Link> 
                                    </div>
                                    <div className='description'>
                                      <h4>{output}</h4>
                                      <p>Edition: {book.book_lang}</p>
                                    </div>

                                </div>
                                <div className='extra content'>
                                     <span>Authored By: {book.author}</span>
                                </div>
                            </div>
                        </div>                    
                    )
                })
            }
          

        </div>
        </div>

    )
 
};

export default Home;