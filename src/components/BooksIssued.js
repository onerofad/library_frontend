import Header from "./Header";
import { useState, useEffect } from "react";
import API_ISSUE_BOOK from "../services/API_ISSUE_BOOK";
import API from "../services/API";
import moment from 'moment'

const BooksIssued = () => {
    
    const [issuedBooks, setIssuedBooks] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
       getBooks()
       getIssuedBooks()
     
    })

    const getIssuedBooks = () =>{
        API_ISSUE_BOOK.get("/")
         .then((res) => setIssuedBooks(res.data))
          .catch(console.error)
    }

    const getBooks = () => {
        API.get("/")
        .then((res) => setBooks(res.data))
         .catch(console.error)
    }

   

    return(
        <div>
            <Header />
            <div className="ui stackable two column grid">
                {
                 
                    issuedBooks.map((newBook) => {
                       
                            return(
                                <div key={newBook.book} className="column">
                                    <div style={{display: "flex", backgroundColor: "InfoBackground"}}> 
                                         <img style={{float: "left"}} className="ui image" src = {newBook.book_image} alt = "" />
                                       <div style={{float: "right", margin: "10px"}}>
                                        <p className="ui header">{newBook.name}</p>
                                        <p className="">
                                           Author Name: {newBook.author}
                                        </p>
                                        <p className="">
                                           Date of Publication: {moment(newBook.pub_date).format('MMMM Do YYYY')}
                                        </p>
                                        <p className="">
                                           Pages: {newBook.no_pages}
                                        </p>
                                        <p className="">
                                           Edition: {newBook.book_lang}
                                        </p>
                                        <p className="">
                                            Book Dimension: {newBook.book_dim}
                                        </p>
                                        <p className="ui extra content">
                                           Date Issued: {moment(newBook.dateissued).format('MMMM Do YYYY')}
                                        </p>
                        
                                       </div>
                                       
                                    </div>
                                    
              
                                </div>
                               
                                
                                
                               )
                      
                        }
                    )
                }
             

            </div>
            
        </div>
    )
}

export default BooksIssued;