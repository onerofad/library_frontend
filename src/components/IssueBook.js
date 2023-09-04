import Header from "./Header";
import { useState, useEffect } from "react";
import API from "../services/API";
import API_STUDENT from "../services/API_STUDENT";
import API_ISSUE_BOOK from "../services/API_ISSUE_BOOK"


const IssueBook = () => {

    const [books, setBooks] = useState([])
    const [book_name, setBookName] = useState("")
    const [pub_date, setPubDate] = useState("")
    const [no_pages, setNoPages] = useState("")

    const [students, setStudents] = useState([])
    const [student_full_name, setStudentFullName] = useState("")
    const [student_birth_date, setStudentBirthDate] = useState("")
    const [student_address, setStudentAddress] = useState("")


    const [msg, setMsg] = useState("");

    useEffect(() => { 
        getBooks();
        getStudents();
    }, []
    )

    const getStudents = () => {
        API_STUDENT.get("/")
         .then((res) => setStudents(res.data))
          .catch(console.error)
    }

    const getBooks = () => {
        API.get("/")
        .then((res) => setBooks(res.data))
        .catch(console.error)
    }

    const book_issue = () => { 
       
        if(book_name === "" || pub_date === "" || 
             no_pages === "" || student_full_name === "" || 
               student_birth_date === "" || student_address === ""){
           setMsg("Fill in All Details")
        }else{     
            let new_book = books.filter(b => b.name === book_name)[0] 

            let s_id = document.getElementById("sid").value
            let sid = parseInt(s_id)
            let new_student = students.filter(s => s.id === sid)[0] 

            let book = new_book.id
            let student = new_student.id

            let item = {book, student} 
            API_ISSUE_BOOK.post("/", item).then(() => setMsg("Book Has Been Issued"))
        }
    }
    const updateBooks = () => {
        let b_name = document.getElementById("bk").value
        let new_book = books.filter(b => b.name === b_name)[0]
        setBookName(new_book.name)
        setPubDate(new_book.pub_date)
        setNoPages(new_book.no_pages)
    }
    const updateStudents = () => {
       let s_id = document.getElementById("sid").value
       let sid = parseInt(s_id)
       let new_student = students.filter(s => s.id === sid)[0]
       let fullname = new_student.firstname + " " + new_student.lastname
       setStudentFullName(fullname)
       setStudentBirthDate(new_student.dob)
       setStudentAddress(new_student.address)     
    }
    const clearDetails = () => {
        setMsg("")
    }
  
    return(
        <div>
          <Header />
          <div className="ui dividing header">
            <i className="ui book icon"></i>BOOK DETAILS
          </div>
          <form className="ui form">
            <div className="equal width fields">
            <div className="field">
                    <label>Search Book</label>
                    <select 
                        id="bk"
                        onChange={() => updateBooks()}  
                        onFocus={() => clearDetails()}                
                    >
                    <option value="choose Book">choose Book</option>
                        {
                           books.map((book) => {
                              return(
                                <option key={book.name} value={book.name}>{book.name}</option>
                              )
                           })
                        }
                      
                    </select>
                </div>
                <div className="field">
                    <label>Book Name</label>
                    <input
                       value={book_name}
                       onChange={(e) => setBookName(e.target.value)}
                    />
                </div>
              
            </div>

            <div className="equal width fields">
                <div className="field">
                    <label>Publication Date</label>
                    <input type="text" 
                        value = {pub_date}
                        onChange={(e) => setPubDate(e.target.value)}

                        
                    />
                </div>
                <div className="field">
                    <label>No of Pages</label>
                    <input
                        value={no_pages}
                        onChange={(e) => setNoPages(e.target.value)}                      
                    />
                </div>
              
            </div>
            <div className="ui dividing header">
                <i className="ui outline user icon"></i>STUDENT DETAILS
            </div>
            <div className="equal width fields">
               <div className="field">
                  <label>Search ID</label>
                  <select  
                    id = "sid"                 
                    onChange={() => updateStudents()}
                  >
                     <option value="Choose a Student">Choose a Student</option>
                     {
                        students.map((student) => {
                            return(
                                <option key={student.id} value={student.id}>{student.id}</option>
                            )
                        })
                     }
                  </select>
               </div>
               <div className="field">
                  <label> Full Name</label>
                  <input 
                     value ={student_full_name}
                     onChange={(e) => setStudentFullName(e.target.value)}
                  />
               </div>
            </div>
            <div className="equal width fields">
               <div className="field">
                  <label>Date of Birth</label>
                  <input
                    value ={student_birth_date}
                    onChange={(e) => setStudentBirthDate(e.target.value)}
                  />
               </div>
               <div className="field">
                  <label>Address</label>
                 <input 
                    value ={student_address}
                    onChange={(e) => setStudentAddress(e.target.value)}
                 />
               </div>
            </div>
            <div className="field">
                <button type="button" onClick={() => book_issue()} className="ui basic blue button">Issue Book</button>
                <span>{msg}</span>
            </div>
          
          </form>

        </div>
    )
}

export default IssueBook;