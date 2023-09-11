import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Grid, Pagination, Segment } from "semantic-ui-react"
import API from "../services/API"

const PaginationComponent = () => {

    const [activePage, setactivePage] = useState()
    const [totalPages, setTotalPages] = useState(0)
    const navigate = useNavigate()
    const params = useParams()
    const [books, setbooks] = useState([])
    let count = 0

    const getBooks = () => {
        API.get("/")
        .then((res) => setbooks(res.data))
        .catch(console.error)
    }

    useEffect(() => {
        getBooks()
        getTotalPages()
    })

    const getTotalPages = () => {
        books.map(() => {
            ++count
        })
        let tot = Math.ceil(count/1)
        setTotalPages(tot)
    }

    const handlePaginationChange = (activePage) => {       
        setactivePage(activePage)
        navigate("/" + activePage)
    }
    return(
       <Grid>
        <Grid.Row>
            <Grid.Column>
                <Pagination 
                    onPageChange={(e, {activePage}) =>{handlePaginationChange(activePage)}} 
                    activePage={activePage}
                    totalPages={totalPages}
                 />
            </Grid.Column>
        </Grid.Row>
       </Grid>
    )
}
export default PaginationComponent