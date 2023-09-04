import { Link } from "react-router-dom";

const Header = () => {
   return(
    <div>
        <div className="ui dividing header">
            <div className="ui left floated header"> 
                    <Link to="/">Library App</Link>
            </div>
            <div className="ui right aligned header">
                    <ul className="ui horizontal list">
                        <Link className="item" to="/">Home</Link>
                        <Link className="item" to="/issuebook">Issue Book</Link>
                        <Link className="item" to="/booksissued">Books Issued</Link>

                    </ul>
            </div>       
        </div>
        <br/>
    </div>
    
   )
};

export default Header;