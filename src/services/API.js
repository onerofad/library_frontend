import axios from 'axios'
    
export default axios.create({
        baseURL: "https://library-tau-peach.vercel.app/api/books/",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
})

      
