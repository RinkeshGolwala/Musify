import logo from '../images/logo.png';
import './Header.scss';

const Header = () => {
    return (
        <div className='header-section'>
            <div className='header-section__logo-wrapper'>
                <img
                    src={logo}
                    className="header-section__logo"
                    alt="React Bootstrap logo"
                />
            </div>
        </div>
    )
}

export default Header;