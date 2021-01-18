import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return(
        <header className="App-header">
            <ul>
                <li>
                    <Link to="/" >Home</Link>               
                </li>
                <li>
                    <Link to="/sobre">Sobre nós</Link>
                </li>
                <li>
                    <Link to="/fale-conosco">Fale conosco</Link>
                </li>
            </ul>
        </header>   
    )
}

export default Header;