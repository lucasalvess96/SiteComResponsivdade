import './style.css';
// import '../../GlobalCss/Style.css'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MenuComponent = () => {
    return(
        <header className="menu-header2">
            <div className="container">
                <h2>DesignL</h2> 
                <nav className="nav-header2">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="checkbtn"> <FaBars /></label>
        
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="ComponentAbout">About</Link></li>
                        <li><Link to="ComponentServices">Services</Link></li>
                        <li><Link to="ComponentContacts">Contact</Link></li>
                        <li><Link to="ComponentFeedbacks">FeedBack</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MenuComponent